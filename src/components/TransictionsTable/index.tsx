import { Container } from "./styles";

export function TransictiosTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento WebSite</td>
                        <td className="deposito">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>05/12/22</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="retirada">- R$1.000</td>
                        <td>Casa</td>
                        <td>05/12/22</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}