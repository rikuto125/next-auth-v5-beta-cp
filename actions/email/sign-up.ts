"use server";

import { signUpSchema } from "@/schemas";
import { ActionsResult } from "@/types/ActionsResult";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/db/user";
import { db } from "@/lib/db";
import { handleError } from "@/lib/utils";

export const signUp = async (
  values: z.infer<typeof signUpSchema>,
): Promise<ActionsResult> => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      isSuccess: false,
      error: {
        message: validatedFields.error.message,
      },
    };
  }

  const { email, password, companyName } = validatedFields.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return {
        isSuccess: false,
        error: {
          message: "このメールアドレスは既に登録されています。",
        },
      };
    }

    // console.log('Creating user...');
    // console.log('nickname:', nickname);
    // console.log('email:', email);
    // console.log('hashedPassword:', hashedPassword);

    await db.user.create({
      data: {
        name: companyName,
        email,
        password: hashedPassword,
      },
    });

    return {
      isSuccess: true,
      message: "サインアップに成功しました。本部の最終確認をお待ちください。",
    };
  } catch (error) {
    handleError(error);

    return {
      isSuccess: false,
      error: {
        message: "サインアップに失敗しました。",
      },
    };
  }
};
