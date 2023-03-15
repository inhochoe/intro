from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient(
    'mongodb+srv://sparta:test@cluster0.htcvgcz.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta
 
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/posting.html')
def posting():
    return render_template('posting.html')

@app.route('/detail.html')
def detail():
    return render_template('detail.html')

# @app.route("/profile-detail")
# def posting():
#     return render_template('index.html','detail.html','posting.html')

# ============================= 전체 프로필 조회 =============================
@app.route("/profiles", methods=["GET"])
def profile_get():
    profile_name = list(db.profiles.find({},{'_id':False}))
    return jsonify({'result':profile_name})
# ============================= 프로필 상세보기 =============================
@app.route("/profiles", methods=["GET"])
def profile_detail_get():
    all_data = list(db.profiles.find({},{'_id':False}))
    return jsonify({'result':all_data})

# ============================= 댓글 관련(심화) =============================

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
    dog_receive = request.form['dog_give']
    cat_receive = request.form['cat_give']
    mind_receive = request.form['mind_give']


    doc = {
        'real_name' : real_name_receive,
        'nick_name' : nick_name_receive,
        'img' : img_receive,
        'sns' : sns_receive,
        'lang' : lang_receive,
        'want' : want_receive,
        'strength' : strength_receive,
        'dog' : dog_receive,
        'cat' : cat_receive,
        'mind' : mind_receive
    }

    db.profiles.insert_one(doc)

    return jsonify({'msg': '프로필을 작성했습니다'})
    
if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)