//認証が必要ないルート
export const publicRoutes: string[] = ["/", "/home"];

//認証済みの場合ユーザをリダイレクトするルート
export const authRoutes: string[] = ["/sign-up", "/sign-in"];

// 認証関連のAPIルートのプレフィックス
export const apiAuthPrefix: string = "/api/auth";

// ログイン後のリダイレクト先
export const DEFAULT_LOGIN_REDIRECT: string = "/admin/dashboard";
