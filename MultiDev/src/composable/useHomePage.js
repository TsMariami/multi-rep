import { ref } from 'vue'
export default (function useHomePage() {
    const services = ref([
        {
            icon: 'src/assets/icons/full-stack-icon.svg',
            title: 'Full-Stack Development',
            description: "From front-end to back-end, we've got your development needs covered. Let's build something amazing together.",
        },
        {
            icon: 'src/assets/icons/design-icon.svg',
            title: 'Design',
            description: "Elevate your digital presence with our expert design services. From sleek interfaces to captivating user experiences, we craft designs that inspire and engage. Let's create something extraordinary."
        },
        {
            icon: 'src/assets/icons/managment-icon.svg',
            title: 'Data Bases Management',
            description: "Streamline your data with our comprehensive database management solutions. From organization to optimization, we ensure your data works for you. Let's make managing data effortless."
        },
        {
            icon: 'src/assets/icons/mobile-icon.svg',
            title: 'Mobile Development',
            description: "ransform your ideas into powerful mobile experiences with our expert development services. From concept to launch, we bring your app vision to life across platforms. Let's create mobile magic together."
        },
        {
            icon: 'src/assets/icons/devops-icon.svg',
            title: 'DevOps',
            description: "Empower your development process with our cutting-edge DevOps solutions. From seamless integration to continuous deployment, we optimize your workflow for efficiency and scalability. Let's streamline your operations for success."
        },
        {
            icon: 'src/assets/icons/computing-icon.svg',
            title: 'Cloud Computing',
            description: "Unlock the potential of the cloud with our tailored computing solutions. From migration to optimization, we empower your business with scalable, secure, and flexible cloud infrastructure. Let's elevate your operations to new heights in the digital sky."
        },
    ])
    const aboutUs = ref([
        {
            title: 'work with proffesional',
            description: 'we have proffesional team that will guid you through all proceses of your choesing'
        },
        {
            title: 'Quality at an affordable price',
            description: 'Our company is committed to delivering products that offer big value at a small price, making quality accessible to all'
        },
        {
            title: 'Transparency',
            description: "We believe in transparency every step of the way, from pricing and policies to communication and feedback, so you can trust that you're always in the know",
        },
        {
            title: 'Innovation',
            description: 'With a focus on innovation, we continuously evolve to bring you the latest advancements in technology, design, and functionality'
        },
    ])
    const contactUs = ref([
        {
            icon: 'src/assets/icons/phone-icon.svg',
            title: 'step 1',
            arrow: 'src/assets/icons/arrow-icon.svg'
        },
        {
            icon: 'src/assets/icons/discuss-icon.svg',
            title: 'step 2',
            arrow: 'src/assets/icons/arrow-icon.svg'
        },
        {
            icon: 'src/assets/icons/feedback-icon.svg',
            title: 'step 3'

        },
    ])
    let instance = {
        services,
        aboutUs,
        contactUs
    };
    return () => {
        return instance;
    };
})();