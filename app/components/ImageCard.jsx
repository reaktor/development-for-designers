import Image from 'next/image'
import image from "../images/how-to-close-vim.jpg";

/* I would like to get values for cardpic and cardtext in the file where they are used (in this case git.jsx), but I didn't
know how to do it */
const cardpic = image;
const cardtext = "Take it easy and just remember to refer to this if you are stuck in vim.";

export default function ImageCard() {
    return (
        <>
            <div>
                <Image src={cardpic}
                    alt="How to close vim"
                    width={500}
                    height={500}/>
                <p>{cardtext}</p>
            </div>
        </>
    )

}



