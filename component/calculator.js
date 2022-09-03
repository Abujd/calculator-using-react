import react from 'react';
import {useState} from 'react'
import styles from './calculator.module.scss';

export default function Calculator(){

    const[result, setResult] = useState('');
    const [computedResult, setComputedResult] = useState(false);

    const handleClick = (e) => {
        if(computedResult){
            setComputedResult(false);
            setResult(e.target.name);
        }else{
            setResult(result.concat(e.target.name));
        }
    }

    const clear = () => {
        setResult('');
    }

    const backSpace = () =>{
        const eResult = result.slice(0, -1);
        setResult(eResult);
    }

    const calculate = () =>{
        
        try{
            setResult(eval(result).toString());
            setComputedResult(true);
        }catch(err){
            if(result.length){
                setResult('Invalid')
            }else{
                setResult('Please enter values')
            }
        }
    }

    return(
        <>
        <div className='container-fluid text-center py-[100px] md:pl-10 flex justify-center'>
          <div className={`${styles.calculatorLayout} w-full py-10 bg-[#79B1EF]`}>
              <form>
                  <input type='text' value={result} className='border rounded-[1px] w-10/12 px-6 py-4 mb-[10px] bg-[#79B1EF] text-[#fff] text-[18px] font-bold tracking-[1px]'/>
              </form>
              <div>
                <button onClick={clear} className='py-6 px-16 text-[#fff] border bg-[#FE242B] rounded-[10px] text-[18px] font-bold m-2'>Clear</button>
                <button name='C' onClick={backSpace} className='px-8 py-6 text-[#fff] border bg-[#F59087] rounded-[10px] text-[18px] font-bold m-2'>C</button>    
                <button name='/' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#F59087] rounded-[10px] text-[18px] font-bold m-2'>/</button>    
                <button name='7' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>7</button>    
                <button name='8' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>8</button>    
                <button name='9' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>9</button>    
                <button name='*' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#F59087] rounded-[10px] text-[18px] font-bold m-2'>&times;</button>    
                <button name='4' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>4</button>    
                <button name='5' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>5</button>   
                <button name='6' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>6</button> 
                <button name='-' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#F59087] rounded-[10px] text-[18px] font-bold m-2'>&ndash;</button>    
                <button name='1' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>1</button>   
                <button name='2' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>2</button> 
                <button name='3' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>3</button>    
                <button name='+' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#F59087] rounded-[10px] text-[18px] font-bold m-2'>+</button> 
                <button name='.' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#F59087] rounded-[10px] text-[18px] font-bold m-2'>.</button>   
                <button name='0' onClick={handleClick} className='px-8 py-6 text-[#fff] border bg-[#3A8AE5] rounded-[10px] text-[18px] font-bold m-2'>0</button>
                <button onClick={calculate} className='py-6 px-20 text-[#fff] border bg-[#F59087] rounded-[10px] text-[18px] font-bold m-1'>=</button>
              </div>
          </div>
        </div>
        </>
    );
}
