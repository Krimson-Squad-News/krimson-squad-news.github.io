import { Card } from "./sub_components/Card"
export const Articles = () => {
    return (
        <>
            <section id="home-articles" class="py-2">
                <div class="container">
                    <h2>Recent Highlights</h2>
                    <div class="articles-container">
                        <Card card_details={{ category: "cve", 
                        img: "https://www.bleepstatic.com/content/hl-images/2024/05/17/windows-server-admin-login.jpg", 
                        title: "Ransomware gang targets Windows admins via PuTTy, WinSCP malvertising",
                         desc: "System administrators commonly have higher privileges on a Windows network, making them valuable targets for threat actors who want to quickly spread through a network, steal data, and gain access to a network's domain controller to deploy ransomware." }}>
                         </Card>
                         <Card card_details={{ category: "cve", 
                        img: "https://www.bleepstatic.com/content/hl-images/2024/05/17/windows-server-admin-login.jpg", 
                        title: "Ransomware gang targets Windows admins via PuTTy, WinSCP malvertising",
                         desc: "System administrators commonly have higher privileges on a Windows network, making them valuable targets for threat actors who want to quickly spread through a network, steal data, and gain access to a network's domain controller to deploy ransomware." }}>
                         </Card>
                    </div>
                </div>
            </section>
        </>
    )
}