document.addEventListener('DOMContentLoaded', function() {
      /*var c = document.getElementById('myCanvas')
      var ctx = c.getContext('2d')
      ctx.lineWidth = 2
      */
      var ranArr = [...randomArray()]
      var listOfSorts = bblSort(ranArr)
      var reload = document.getElementById('reload')

      main()


      reload.onclick = main

      async function main() {
        reload.disabled = true
        reload.classList.add('inactive')
        reload.innerHTML = "wait"
        for (var i = 0; i < listOfSorts.length; i++) {
          var toDraw = [...listOfSorts[i]]
          await sleep(100)
          var data = [
            {
              x: [...Array(20).keys()],
              y: [...toDraw],
              type: 'bar'
            }
          ];
          
          Plotly.newPlot('myDiv', data);
        }
        reload.disabled = false
        reload.classList.remove('inactive')
        reload.innerHTML = 'reload'
      }
      
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }


      function drawArray(arr) {      
        for (var j = 0; j < 20; j++) {
            ctx.moveTo(8 + j * 15, 200)
            ctx.lineTo(8 + j * 15, 200 - arr[j] * 10)
            ctx.stroke()
        }
        
      }

      function clearCtx() {
        var c = document.getElementById('myCanvas')
        var ctx = c.getContext('2d')
        ctx.lineWidth = 2
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      }


      function randomArray() {
        var randArr = new Set()
        while (randArr.size < 20) {
            randArr.add(Math.floor(Math.random() * 20))
        }
        return randArr
      }
      

      function bblSort(arr){
          var arrOfArrs = []
          for(var i = 0; i < arr.length; i++){
            // Last i elements are already in place 
            for(var j = 0; j < ( arr.length - i -1 ); j++){
              // Checking if the item at present iteration
              // is greater than the next iteration
              if(arr[j] > arr[j+1]){
                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
                var addArr = [...arr]
                arrOfArrs.push(addArr)
              }
              //var addArr = [...arr]
              //arrOfArrs.push(addArr)
            }
          }
          return arrOfArrs
      }
})