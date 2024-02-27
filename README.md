# プロジェクトセットアップ手順

以下の手順に従って、Dockerの設定とPrismaを用いたデータベースの初期化を行ってください。

## 前提条件

- Node.jsがインストールされていること
- Dockerがインストールされていること
- npmがインストールされていること

## 1. Dockerのセットアップ

プロジェクトにはDockerが必要です。Dockerが未インストールの場合は、[Docker公式サイト](https://www.docker.com/get-started)からインストールしてください。

## 2. Docker環境の起動

以下のコマンドを実行して、Dockerコンテナを起動します。データベースを停止し、再起動することで、環境を初期化します。

```
cd docker
make db-down
make db-up
cd ../
```

## 3. Prismaのセットアップ

Prismaを用いてデータベースのマイグレーションとクライアントの生成を行います。これには、まずPrisma CLIをインストールする必要があります。

```
npm install bun //bunがインストールされていない場合
bun install
npm install prisma --save-dev
npm install @prisma/client
```

次に、データベースのマイグレーションを実行します。

```
npx prisma migrate dev --name init
```

最後に、Prismaクライアントを生成します。

```
npx prisma generate --schema prisma/schema.prisma
```

これで、プロジェクトのセットアップが完了しました。必要な環境が整い、データベースが初期化されました。

## 4. jwtのセットアップ

以下のコマンドを実行して、jwtのシークレットキーを生成してください。
envファイルに記載されているJWT_SECRETにシークレットキーを記載してください。

```
openssl rand -base64 32
```

## 5. プロジェクトの起動

```
bun dev
bun studio
```

## 6. アクセス

http://localhost:3000/sign-up にアクセスしてください。
データ入力後、http://localhost:5555 にアクセスしてデータの確認を行ってください。

## 7. shadcn installコマンド

```
bunx --bun shadcn-ui@latest add <欲しいcomponent名>
```
