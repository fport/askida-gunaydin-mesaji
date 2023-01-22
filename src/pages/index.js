import {Inter} from '@next/font/google'
import arr from '@/mock'
import {useEffect, useState} from "react";
const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [mess, setMess] = useState("")

    useEffect(() => {
        getRandomItem()
    }, []);
    function getRandomItem() {
        if(typeof window !== 'undefined') {
            const randomIndex = Math.floor(Math.random() * arr.length);
            const item = arr[randomIndex];

            setMess(item)
        }
    }

    return (<div className="blog">

        <div className="title-box">
            <h3>
                Askıda Günaydın Mesajı
            </h3>
            <hr/>
        </div>
        <div className="info">
            <span>{mess}</span>
        </div>
        <div className="footer">
            <div className="icon-holder">
      <span>
      <span>{new Date().toLocaleDateString("tr-TR", {
          year: 'numeric', month: 'long', day: 'numeric'
      }).replace(/ /g, '-')}</span>
      </span>
            </div>
        </div>
        <div className="color-overlay"></div>
    </div>)
}
