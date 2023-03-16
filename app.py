from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

from pymongo import MongoClient
import certifi
ca = certifi.where()
client = MongoClient('mongodb+srv://sparta:test@cluster0.t2e898s.mongodb.net/?retryWrites=true&w=majority',tlsCAFile=ca)
db = client.dbsparta
 
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/posting.html')
def posting():
    return render_template('posting.html')

@app.route('/detail/<string:real_name>')    
def detail(real_name):
    profile = list(db.profiles.find({'real_name':real_name},{'_id':False}))
    
    return render_template('detail.html', profile=profile) 

# ============================= 전체 프로필 조회 =============================
@app.route("/profiles", methods=["GET"])
def profile_get():
    real_name = list(db.profiles.find({},{'_id':False}))
    return jsonify({'result': real_name})

# ============================= 프로필 삭제 =============================

@app.route("/profile/delete", methods=["POST"])
def profile_delete():
    real_name_receive = request.form['real_name_give']
    print(real_name_receive)
    db.profiles.delete_one({'real_name':real_name_receive})
    return jsonify({'msg': '삭제되었습니다!'})

# real_name으로 가져와서 디테일에 표시해주고 있으니까
# 삭제도 real_name기준으로 해야 할 듯??

# ============================= 프로필 작성 =============================
@app.route("/profiles", methods=["POST"])
def profile_post():
    real_name_receive = request.form['real_name_give']
    nick_name_receive = request.form['nick_name_give']
    img_receive = request.form['img_give']
    sns_receive = request.form['sns_give']
    lang_receive = request.form['lang_give']
    want_receive = request.form['want_give']
    strength_receive = request.form['strength_give']
    # dog_receive = request.form['dog_give']
    # cat_receive = request.form['cat_give']
    animal_receive = request.form['animal_give']
    mind_receive = request.form['mind_give']

    doc = {
        'real_name' : real_name_receive,
        'nick_name' : nick_name_receive,
        'img' : img_receive,
        'sns' : sns_receive,
        'lang' : lang_receive,
        'want' : want_receive,
        'strength' : strength_receive,
        # 'dog' : dog_receive,
        # 'cat' : cat_receive,
        'animal' : animal_receive,
        'mind' : mind_receive
    }
    db.profiles.insert_one(doc)
    return jsonify({'msg': '프로필을 작성했습니다'})
    
if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)


    