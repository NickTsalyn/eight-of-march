import React from 'react';
import rose from '../images/red-roses.png';
import flower1 from '../images/flower1.png';
import flower2 from '../images/flower2.png';

export const HomePage = () => {
  return (
    <main className="flex justify-between items-center gap-5 h-screen w-screen bg-gradient-to-br from-red-500 to-pink-300 p-10 md:p-40 rounded">
      <div className="">
        <ul className='flex items-center flex-col gap-12'>
          <li className="">
            <img src={rose} alt="flower" />
          </li>
          <li className="">
            <img src={flower1} alt="flower" />
          </li>
          <li className="">
            <img src={flower2} alt="flower" />
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='text-xl md:text-5xl text-center'>Вітаємо з 8 березня</h1>
        <p className=' leading-5 md:text-2xl text-yellow-150'>
          Дорогі наші жінки, з нагоди Міжнародного Жіночого Дня віддавайте себе
          цілком і повністю тому, що робить вас щасливими. Нехай цей день буде
          святом вашої сили, врівноваженості і надзвичайної краси. Ви - джерело
          натхнення для всього світу, і ми бажаємо вам отримати назад удвічі
          більше радості, любові і визнання. Ви - творці затишку вдома, лідери
          на роботі і невтомні допоміжники в усіх справах. Нехай кожен ваш день
          буде наповнений невимовною радістю і визнанням ваших талантів. Нехай
          любов і повага супроводжують вас на всіх етапах життя, а ваш внесок у
          світ завжди буде великим і неповторним. Бажаємо вам великих досягнень,
          благополуччя та безмежного щастя. Ви - найкращі, і цей світ кращий
          завдяки вам!
        </p>
      </div>
    </main>
    
  );
};
