// 1.0 引入 mongodb
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'koa2';
// const client = new MongoClient(url, { useUnifiedTopology: true });
const querystring = require('querystring');
// 2.0 引入 express
const express = require('express');
const app = express();
const port = 5000;

// 引入 ejs 模板引擎
const ejs = require('ejs');

// 3.0 启动 express 路由服务
app.get('/', (req, res) => {
	// 连接 MongoDB 查询 表数据
	MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log('mongo connect success...');

		let db = client.db(dbName);

		db.collection('koa2')
			.find({})
			.toArray((error, data) => {
				// 转换数据
				if (err) {
					return;
				}
				console.log(data);
				// 模板渲染
				ejs.renderFile(
					'./view/index.ejs',
					{
						list: data,
					},
					(err, data) => {
						res.send(data);
					},
				);
				// 关闭数据库连接
				client.close();
			});
	});
});

// 注册
app.get('/register', (req, res) => {
	// 模板渲染
	ejs.renderFile('./view/register.ejs', (err, data) => {
		res.send(data);
	});
});

app.post('/doRegister', (req, res) => {
	// 模板渲染
	let data = querystring.parse(req.body);
	console.log('data', data);
	MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
		if (err) {
			console.error(err);
			return;
		}

		let db = client.db(dbName);
		db.collection('koa2').insertOne(data, (err, result) => {
			res.send('增加注册用户数据成功！');
		});
	});
});

app.listen(port, () =>
	console.log(`MongoDB service listening on port ${port}!`),
);
