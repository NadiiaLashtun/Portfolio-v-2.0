import BackgroundText from "../UI/BackgroundText";
import SocialList from "../UI/SocialMedia/SocialList";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";

function ContactsPage() {
  return (
    <section className='relative px-16 pt-16 bg-brand-color -z-10'>
      <div className='w-1/3 h-[1px] absolute top-[60px] left-1/2 -translate-x-1/2 bg-black'></div>

      <div className='flex justify-center pt-7'>
        <SocialList color='text-black' />
      </div>
      <div className='flex justify-center lg:justify-end pt-12 lg:pt-0'>
        <div className='flex flex-col gap-4 mb-20 '>
          <div className='flex items-center gap-3'>
            <img src={Phone} alt='Phone' />
            <a href='tel:+380982895423'>+38(098)-289-54-23</a>
          </div>
          <div className='flex items-center gap-3'>
            <img src={Mail} alt='Email' />
            <a href='mailto:nadezhda.lashtun@gmail.com'>
              nadezhda.lashtun@gmail.com
            </a>
          </div>
        </div>
      </div>

      <h2 className='font-Montserrat-Alternates font-bold text-[120px] md:text-[180px] text-white text-left'>
        Contacts
      </h2>
      <BackgroundText text='contacts' left='10%' bottom='0' />
    </section>
  );
}

export default ContactsPage;

/*translate-x-[60%]*/
