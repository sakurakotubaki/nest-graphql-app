## GraphQLローカル用
ローカル環境で、GraphQL APIを使用する。
npmのパッケージをインストールする。
```bash
npm i
```

ローカルサーバーを起動する。
```bash
npm run start
```

http://localhost:3000/graphql


クエリを実行してデータを取得
```
# Write your query or mutation here
{
  users {
    id
    name
    email
  }
}
```