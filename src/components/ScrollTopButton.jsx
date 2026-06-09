import { IconChevronUp } from '@tabler/icons-react';

export default function ScrollTopButton (){
    const scrollToTop = () => {
        console.log('clicked')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <div className="relative m-xl">
            <button 
                className="w-12 h-12 border-2 rounded-full absolute bottom-4 right-0 flex items-center justify-center bg-primary-100 border-primary-500 cursor-pointer hover:bg-primary-200"
                onClick={scrollToTop}
            >
                <div className="text-center"><IconChevronUp color="var(--color-primary-500)" stroke={2} /></div>
            </button>
        </div>
    );
}