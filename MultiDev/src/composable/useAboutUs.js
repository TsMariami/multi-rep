import { ref } from 'vue'
export default (function useHomePage() {
    const services = ref([
        {
            title: 'Full Stack Development',
            img: 'src/assets/imgs/devops_1.png',
            description: 'Our Full Stack developers are masters of both front-end and back-end technologies. They ensure your website or application not only looks stunning but also functions flawlessly, providing a seamless experience for your users. '
        },
        {
            title: 'Mobile Applications',
            img: 'src/assets/imgs/Enterprise-mobility-01 1.png',
            description: "With our Mobile Applications team, your brand will reach customers wherever they are. Whether it's iOS, Android, or cross-platform development, we tailor solutions to suit your specific needs."
        },
        {
            title: 'Cloud Services',
            img: 'src/assets/imgs/Cloud_Services 1.png',
            description: "Our Cloud Services experts leverage the power of the cloud to provide scalable, secure, and efficient solutions for your business. From deployment to maintenance, we've got you covered."
        },
        {
            title: '3D Visualization',
            img: 'src/assets/imgs/QA_testing_-_resized 1.png',
            description: "Elevate your projects with our 3D Visualization services. Whether it's architectural renderings, product prototypes, or immersive experiences, our skilled artists bring your ideas to life with stunning realism."
        },
        {
            title: 'QA and Testing',
            img: 'src/assets/imgs/4023888-3dvisualization-infographic-information-visualization_112871 1.png',
            description: 'Quality is at the heart of everything we do. Our QA and Testing team meticulously assesses every aspect of your project to ensure it meets the highest standards of performance, reliability, and security.'
        },
        {
            title: '3D Interior Design',
            img: 'src/assets/imgs/acl-icon-FID-black-e1691660658758 1.png',
            description: "Transform spaces with our 3D Interior Design expertise. From concept to completion, our designers work closely with clients to create personalized and visually stunning interiors that exceed expectations. At [Your Company Name], we're not just developers—we're partners in your success. Let's collaborate and build something extraordinary together."
        },
    ])

    let instance = {
        services
    };
    return () => {
        return instance;
    };
})();