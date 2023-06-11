# AWS Amplify テンプレートモジュール

### 環境確認

```
本、Githubからチェックアウト（pull）して、npm installを行うと下記のバージョンにてインストールが確認できると思います。

## nodejs のバージョン
node -v
v14.20.0

## npm のバージョン
npm -v
8.19.1

## amplify のバージョン
amplify -v
12.0.3
```

### 初回起動設定

```
## node_module及びamplifyのフォルダがないことを確認の上、下記のコマンドを叩いてください

npm install #npm モジュール群が自動的にインストールされます。

## amplify studioの画面に入り、自身のアプリにログインし、下記のpullコマンドを拾ってきてターミナル上で実行してください
amplify pull --appId xxxxxx --envName master

```

### amplify cognitoの設定がまだの方

```
1. Amplify Studioを起動
2. 左メニューのAuthenicationを起動
3. 右下の[Deploy]ボタンを押下

このあとデプロイ（サーバーが自動で生成）されますので、数分待った上で下記のようなコードが出るのを待ちます。
amplify pull --appId xxxxxx --envName master
```

### ローカルでの実行（PC内での確認）

```
npm start 

# http://localhost:3000/ を開き、ログインができるかの確認をお願いいたします。

```


### ローカルでファイルを更新した時には、適宜GitHubにpushしましょう

```
## .を入力することで新規ファイルを一括で選択することができます。
1. git add （対象ファイル）　または git add . 

2. git commit -a -m "コミットした時に何をしたかメッセージの残す欄"

3. git push origin main
```

上記の通り、GitHubに `git push 〜〜` まですることにより、クラウド上にデータを反映させることができます。
また、現在お使いのPCだけではなく、ほかのPCでもチェックアウトすることが可能となりますので、PCに依存せず環境をそのまま利用できます。



### @author sakumoto