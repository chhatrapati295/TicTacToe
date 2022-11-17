let ting = new Audio('ting.mp3')
let winningMoment = new Audio('winningmoment.mp3')
let turn = 'X'
let isgameover = false
const changeTurn = ()=>{
    return turn === 'X'?'O':'X'
}
const checkWin = ()=>{
    let boxtext = document.querySelectorAll('.boxinfo')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !==''){
            isgameover = true
            for(let i=0;i<1;i++){
                winningMoment.play()
            }
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
            document.getElementsByClassName('info')[0].innerText = boxtext[e[0]].innerText + ' WON'
            document.getElementById('reset').innerText = 'Restart'
        }
    })
}
let boxes = document.querySelectorAll('.box')
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxinfo')
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeTurn()
            ting.play()
            checkWin()
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn
            }
        }
    })
})
let reset = document.querySelector('#reset')
reset.addEventListener('click',(e)=>{
    let boxtext = document.querySelectorAll('.boxinfo')
    Array.from(boxtext).forEach(element=>{
        element.innerText = ''
    })
        turn = 'X'
        isgameover = false
        document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'

})
