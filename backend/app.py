# app.py
 
from flask import Flask, jsonify, request, session
from flask_cors import CORS
import pymongo
import json
from datetime import timedelta

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['JSON_AS_ASCII'] = False # 保持中文字輸出
app.config['SECRET_KEY']='123' #這一串config沒有為什麼 就是要存在
app.config['SESSION_TYPE']='filesystem'
app.config['SESSION_FILE_DIR']='D:/WEB_final/session'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=31)
CORS(app, resources={r"*": {"origins": "http://127.0.0.1:3000"}}, supports_credentials=True) #跨網域設定

db_uri = "mongodb+srv://aquariusmandy1122:ok7TWaQZN3xExhPO@cluster0.ud6ryv5.mongodb.net/?retryWrites=true&w=majority"
mongo = pymongo.MongoClient(db_uri)
db = mongo['WebClass']

#在沒有前端傳入的情況下，測試session用的(跳過login直接傳入參數)
@app.before_request
def before_request():
    session['email']='abc@com.tw'

@app.route('/', methods=['GET'])
def hello_world():
    if request.method == 'GET':
        return 'Hello, World!'

# Sign up and Login
@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        data = request.json
        email = data['email']
        password = data['password']
        condition1 = {'email': email}
        correct_email = db['User'].find_one(condition1)
        if correct_email['password'] == password:
            session['email']=email ####加入session
            return jsonify(message='Correct.')
        else:
            return jsonify(message='Not correct.')

@app.route('/signup', methods=['POST'])
def signup():
    if request.method == "POST":
        data = request.json
        email = data['account']
        password = data['password']
        name = data['name']
        condition = {'email': email}
        same_email = db['User'].find_one(condition)
        if same_email:
            return jsonify(message='Email used.')
        else:
            new_user = {'name': name, 'email': email, 'password': password}
            result = db['User'].insert_one(new_user)
            return jsonify(message='Ok')

# Map Relative (不需要session)
@app.route('/get_MapData', methods=['GET'])
def get_MapData():
    if request.method == "GET":
        allData = db['User'].find()
        dataJson = []
        for data in allData:
            dataJson.append({
            'case_type': data['case_type'],
            'animal_type': data['animal_type'],
            'ligation': data['ligation'],
            'hurt': data['hurts'],
            'detail': data['other'],
            'lat': data['location'][0],
            'lon': data['location'][1],
            'img': data['img']
        })
        print(dataJson)
        json_data = jsonify(dataJson)
        return json_data

# report Relative
@app.route('/report', methods=['POST'])
def report():
        data = request.json
        user = session.get('email')
        Casetype = data['CaseType']
        Animaltype = data['AnimalType']
        Ligation =data['Ligation']
        Hurts = data['Hurts']
        Additional = data['Additional']
        Publish = data['Publish']
        Image = data['Image']
        Location = data['Location']
        count = db['AnimalReport'].count_documents({})
        
        report_data = {
            '_id':count+1,
            'user':user,
            'case_type': Casetype,
            'animal_type':Animaltype,
            'ligation':Ligation,
            'hurts': Hurts,
            'other': Additional,
            'post': Publish,
            'img': Image,
            'location': Location
        }
        
        response = db['AnimalReport'].insert_one(report_data)
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000') #不確定POST需不需要
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return f"Report created with id: {response.inserted_id}"

# personal-page    
@app.route('/count', methods=['GET']) #統計回報次數
def get_count():
    if request.method == 'GET':
        user=session['email']
        print(session.get('email'))
        count = db['AnimalReport'].count_documents({"user":user})
        response = jsonify(count)
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000') #啟用session跨網域需要(不知道原因，不加後端會一切正常，但前端就是抓不到後端資料)
        response.headers.add('Access-Control-Allow-Credentials', 'true') #啟用session跨網域需要
        return response  

@app.route('/image', methods=['GET']) #動物圖片
def get_image():
    if request.method == 'GET':
        user=session['email']
        images_data = db['AnimalReport'].find({"user":user})
        dataJson = []
        for data in images_data:
            dataDict = {
                "img":data['img']
            }
            dataJson.append(dataDict)
        response = jsonify(dataJson)
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response

@app.route('/location', methods=['GET']) #回報經緯度
def get_report():
    if request.method == 'GET':
        user=session['email']
        images_data = db['AnimalReport'].find({"user":user})
        dataJson = []
        for data in images_data:
            dataDict = {
                "lon":data['location'][1],
                "lat":data['location'][0]
            }
            dataJson.append(dataDict)
        response = jsonify(dataJson)
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response

@app.route('/user', methods=['GET']) #抓取登入者個人資料
def get_user():
    if request.method == 'GET':
        user=session['email']
        allData = db['User'].find({"email":user})
        dataJson = []
        for data in allData:
            id = data['_id']
            name = data['name']
            email = data['email']
            dataDict = {
                'id': str(id),
                'Name': name,
                'Email': email
            }
            dataJson.append(dataDict)
        response = jsonify(dataJson)
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response

@app.route('/logout', methods=['POST'])
def logout():
    if request.method == "POST":
        session.clear()  # 清空 session
        response = jsonify({'success': True, 'message': '登出成功'})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response
    

if __name__ == "__main__":
    app.run(host = '127.0.0.1', port = 5000, debug=True)