

module.exports = {
    onload(){
        Editor.log("nick onload");
    },
    unload () {
        // 当 package 被正确卸载的时候执行
      },
    
      messages: {
        'say' () {
          Editor.log('Hello nick!');
        }
      },
}