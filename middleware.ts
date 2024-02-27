// NextAuthというライブラリを使って認証機能を作ります。
import NextAuth from "next-auth";
// 認証の設定を別のファイルから読み込みます。
import authConfig from "@/auth.config";
//  ルートや認証関連の設定を別のファイルから読み込みます。
import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

// NextAuthの設定を使って認証機能を作成します。
const { auth } = NextAuth(authConfig);

//  ユーザーがどのページにアクセスしようとしているかを確認します。
export default auth((req) => {
  const { nextUrl } = req; //  ユーザーがアクセスしようとしているURLを取得します。

  const isLoggedIn = !!req.auth; //  ユーザーがログインしているかどうかをチェック

  //  ユーザーがアクセスしようとしているURLが認証関連のAPIルートかどうかをチェックします。
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  //  ユーザーがアクセスしようとしているURLが公開されているページかどうかをチェックします。
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  //  ユーザーがアクセスしようとしているURLが認証が必要なページかどうかをチェックします。
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //  ユーザーが認証関連のAPIルートにアクセスしようとしている場合、何もしないでリクエストを通す。
  if (isApiAuthRoute) {
    return null;
  }

  console.log("isLoggedIn", isLoggedIn);
  console.log("isPublicRoute", req.auth);
  //  ユーザーが認証が必要なページにアクセスしようとしている場合、
  //  すでにログインしている場合はデフォルトのログインページにリダイレクトし、
  //  そうでない場合は何もしないでリクエストを通す。
  if (isAuthRoute) {
    // if (nextUrl.pathname === "/admin" && req.auth?.role !== "ADMIN") {
    //   return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    // }

    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  //  ユーザーがログインしていないかつ公開されていないページにアクセスしようとしている場合、
  //  サインアップページにリダイレクトします。
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/sign-up", nextUrl));
  }

  //  それ以外の場合、何もしないでリクエストを通す。
  return null;
});

//  この認証機能をどのページに適用するかを指定します。
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
