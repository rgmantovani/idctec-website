import React from "react";
import { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("E-mail enviado:", email); 
        setEmail(""); 
    };

    return (
        <footer className={styles.footer}>
            <a href="#top" className={styles.backToTop}>
                Voltar ao Topo
            </a>
            <div className={styles.partnership}>
                <h3>Deseja estabelecer uma parceria?</h3>
                <form onSubmit={handleFormSubmit} className={styles.emailForm}>
                    <input
                        type="email"
                        placeholder="Insira o seu email aqui*"
                        value={email}
                        onChange={handleEmailChange}
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Participar
                    </button>
                </form>
            </div>
            <div className={styles.social}>
                <span>© 2024. Criado pela turma de oficina de integração 2 - 2/24</span>
            </div>
        </footer>
    );
};

export default Footer;
