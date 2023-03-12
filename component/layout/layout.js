import React from "react";
import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function LayoutComponent({ children, layoutTheme, changeTheme, honorsTab, achievementsTab, publicationTab }) {
    const [theme, setTheme] = useState(layoutTheme);

    const [honors, setHonors] = useState(honorsTab);
    const [achievements, setAchievements] = useState(achievementsTab);
    const [publication, setPublication] = useState(publicationTab);

    useEffect(() => {
        setTheme(layoutTheme);

        setHonors(honorsTab);
        setAchievements(achievementsTab);
        setPublication(publicationTab);
    }, [layoutTheme, honorsTab, achievementsTab, publicationTab]);

    return (
        <div>
            <main>
                <div>
                    <header>
                        <Header
                            layoutTheme={theme}
                            changeTheme={changeTheme}
                            honorsTab={honors}
                            achievementsTab={achievements}
                            publicationTab={publication}
                        />
                    </header>
                </div>
                <div>
                    {children}
                </div>
                <div>
                    <footer>
                        <Footer
                            layoutTheme={theme}
                        />
                    </footer>
                </div>
            </main>
        </div>
    );
}
