import { Summary } from "../Summary";
import { TransictiosTable } from "../TransictionsTable";
import { Container } from "./styles";


export function Dashboard() {
    return(
        <Container>
            <Summary/>
            <TransictiosTable/>
        </Container>
    );
}