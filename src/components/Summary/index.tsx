import { Container } from "./styles";
import incomesImg from "../../assets/incomes.svg";
import outcomesImg from "../../assets/saidas.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomesImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomesImg} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="fundo-destaque">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    );
}