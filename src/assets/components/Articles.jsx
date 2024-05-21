import { Card } from "./sub_components/Card"
export const Articles = () => {
    return (
        <>
            <section id="home-articles" class="py-2">
                <div class="container">
                    <h2>Recent Highlights</h2>
  <Card card_details={{ category: "cve", 
                        img: "https://www.bleepstatic.com/content/hl-images/2024/05/17/windows-server-admin-login.jpg", 
                        title: "Ransomware gang targets Windows admins via PuTTy, WinSCP malvertising",
                         desc: "System administrators commonly have higher privileges on a Windows network, making them valuable targets for threat actors who want to quickly spread through a network, steal data, and gain access to a network's domain controller to deploy ransomware." }}>
                         </Card>
                         <Card card_details={{ category: "cve", 
                        img: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_0da398b6bec445230418055cb5eab676/kaspersky-cybersecurity-services.png", 
                        title: "KSN data reveals over 20% Indian users suffered cyber threat",
                         desc: "System administrators commonly have higher privileges on a Windows network, making them valuable targets for threat actors who want to quickly spread through a network, steal data, and gain access to a network's domain controller to deploy ransomware." }}>
                         </Card>
                         <Card card_details={{ category: "cve", 
                        img: "https://static.javatpoint.com/tutorial/ethical-hacking/images/man-in-the-middle-attacks.jpg", 
                        title: "IEEE 802.11 Wi-Fi standard flaw allows victim fall in MITM",
                         desc: "An attacker that is close enough to a target network to perform a man-in-the-middle attack could stick a rogue access point with the same SSID as the 5 GHz band. They could then use the rogue access point to receive and forward all authentication frames to the weaker 2.4 GHz access point and have the client device connect with that network instead." }}>
                         </Card>
                         <Card card_details={{ category: "cve", 
                        img: "https://res.cloudinary.com/bx1/image/fetch/f_auto,q_auto/https://cyber-security.tk/img/blog/Silver.png", 
                        title: "Sliver C2 Framework in a PYPI package",
                         desc: "The requests-darwin-lite Package hides Sliver C2 framework in a logo png file, after acknowledgement PYPI tooks down the package." }}>
                         </Card>
                
                </div>
            </section>
        </>
    )
}
