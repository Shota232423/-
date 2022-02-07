let a = document.getElementById('shuffle');
let b;
let c;

//シャッフルボタンを押した時
a.addEventListener('click',function(){
    //HTMLCollectionを取得
    b = document.getElementsByName('items');
    //HTMLCollectionを普通の配列にする
    b =  item3 = Array.prototype.slice.call(b);
    //バリデーション用の元の順番通りの配列を用意
    c = b;
    // シャッフル
    b = _.shuffle(b);
},false);

MicroModal.init({
    awaitCloseAnimation: true,
    // モーダル開いて2.7秒たったあとの処理
    onShow: modal => setTimeout(function(){
        // モーダルを消す
      MicroModal.close('modal-1');
      let tabuse = document.getElementById('container');
    //   プログレスバーを消す
      for(let i =0;i<2;i++){
      tabuse.children[0].remove();
      }

      //シャッフル結果を表示する処理
      let is_result = document.getElementById('result');
      //2回目のシャッフルの時、１回目のシャッフルの結果を削除する
      if(is_result.hasChildNodes()){
          let result_item = document.getElementsByClassName('result_item');
          let result_item_len = result_item.length;
          for(let i = 0; i<result_item_len; i++){
              is_result.removeChild(result_item[0]);
          }
      }else{
        // 1回目の時はタイトルをHTMLに追加
        let result_title = document.getElementById('result_title');
        result_title.insertAdjacentHTML('beforeend','<span>シャッフル結果</span>')
      }

    //   シャッフル結果をHTMLに追加
      for(let i = 0; i<b.length;i++){
        let t = document.getElementById('result');
        t.insertAdjacentHTML('beforeend','<div class="result_item"><span>'+(i+1)+'番目　</span><span>'+b[i].value+'</span></div>')
    }
    },2700),
    // スクロール無効化
    disableScroll: true
});

//追加ボタンを押した時のイベント
let item2 = document.getElementById('add_button');
item2.addEventListener('click',add,false);

//追加ボタンを押した時のイベントで実行される関数
//入力欄と削除ボタンを追加
function add(){
    let item = document.getElementById('form');
    item.insertAdjacentHTML('beforeend',
    '<div class="delete_btn_are"><input type="text" name="items" placeholder="Enter Text" /><a class="delete btn" >削除</button></a>');

    //HTMLCollectionを取得
    let item3 = document.getElementsByClassName('delete');
    //HTMLCollectionを普通の配列にする
    item3 = Array.prototype.slice.call(item3);
    //追加される削除ボタンにイベントついか
    item3[item3.length-1].addEventListener('click',
    function (){
        item3[item3.length-1].parentNode.remove();
    },
    false);
}




