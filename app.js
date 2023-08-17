"Use Strict"
const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbolSet="~!@#$%^&*()_+/";

const output=document.querySelector("#pass-box");
const passwordLength=document.querySelector(".row .right #total-char");
const gen=document.querySelector("button");

gen.addEventListener("click",()=>{
    let temp=passwordLength.value;
    let password="";
    let allowedSet=checkTick();
    if(allowedSet.length==0){
        output.textContent="Pleas Tick atleast one of the box";
    }
    else
    {
        while(temp)
        {
            let num=Math.floor(Math.random()*4);
            if(chckSet(num,allowedSet))
            {
                password+=rand(num);
                // console.log(password);
                temp--;
            }
        }
        output.textContent=password;
    }
});

function chckSet(num,allowedSet)
{
    for(let i of allowedSet)
    {
        if(num==Number(i))
        {
            return true;
        }
    }
    return false;
}

function checkTick()
{
    let ans='';
    const uc=document.querySelector(".right #upper-case ");
    const lc=document.querySelector(".right #lower-case ");
    const n=document.querySelector(".right #numbers ");
    const s=document.querySelector(".right #symbols ");
    
    if(uc.checked)
    {
        ans+='0';
    }
    if(lc.checked)
    {
        ans+='1';
    }
    if(n.checked)
    {
        ans+='2';
    }
    if(s.checked)
    {
        ans+='3';
    }
    return ans;
}

function rand(i)
{
    if(i===0)
    {
        return getRandomData(upperSet);
    }
    else if(i==1)
    {
        return getRandomData(lowerSet);
    }
    else if(i==2)
    {
        return getRandomData(numberSet);
    }
    else if(i==3)
    {
        return getRandomData(symbolSet);
    }
}
function getRandomData(str)
{
    let idx=Math.floor(Math.random()*(str.length));
    return str[idx];
}