import Link from "next/link";

export default function contactus() {
    return (
    <div>
      <h1>fhgjkff@gmail.com</h1>
      <div>
      <ul className="flex gap-10 bg-blue-300">
        <li>
           <Link href="/">Home</Link>
        </li>
        <li> <Link  href="/about">About</Link></li>
        <li><Link href="/contact-us">contact us</Link></li>
      </ul>
      <img src="https://media.licdn.com/dms/image/D4E12AQEIqlkU8NSvJg/article-cover_image-shrink_600_2000/0/1692105491054?e=2147483647&v=beta&t=5a8EH7I7NCdUmV13-itNvChm4W_yJOQxx4iFqbaEilE" alt="sorry"  width="2000" />
      </div> 
      </div>
    );
  }