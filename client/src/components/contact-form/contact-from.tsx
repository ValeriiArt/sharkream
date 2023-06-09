
import styles from './styles.module.scss';


const ContactForm = () => {
    const URL = import.meta.env.PUBLIC_TEST;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const telValue = formData.get("tel");

        const telRegex = /^[-]?\d+$/.test(telValue.slice(4));

        if (telValue.length !== 13 || telValue.indexOf("+380") !== 0 || !telRegex) {
            alert(Error("Please enter a correct phone number (+380xxxxxxxxx)"));
            throw new Error("Please enter a correct phone number (+380xxxxxxxxx)");
        }

        try {
            const response = await fetch(`${URL}/submit-form`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Error when submitting the form.");
            }

            const data = await response.json();

            alert(data.message);
            form.reset();
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
        }
    }

    return (
        <form id="myForm" method="POST" onSubmit={handleSubmit} >
            <input
                className={styles.input}
                type="text"
                name="name"
                required
                placeholder="Ім'я"
            />
            <input
                className={styles.input}
                type="tel"
                name="tel"
                required
                placeholder="Телефон"
            />
            <input
                className={styles.input}
                type="email"
                name="email"
                required
                placeholder="E-mail"
            />
            <button className={styles.formBtn}>Надіслати</button>
        </form>
    )
}

export default ContactForm;