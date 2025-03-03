import styled from "styled-components";
import {MatchStatus, MatchStatusName} from "../../types/MatchStatus.ts";

interface IProps {
    homeTeamScore: number;
    awayTeamScore: number;
    status: MatchStatus;
}

const Status = ({homeTeamScore, awayTeamScore, status }: IProps) => {
    return (
        <Container>
            <Score>{awayTeamScore} : {homeTeamScore}</Score>
            <StatusText $status={status}>{MatchStatusName[status]}</StatusText>
        </Container>
    )
}

export default Status;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

const Score = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`

const StatusText = styled.p<{ $status: MatchStatus }>`
    font-size: 16px;
    padding: 6px 8px;
    border-radius: 4px;
    color: #fff;
    min-width: 92px;
    text-align: center;
    background: ${(props) => {
        switch (props.$status) {
            case 'Scheduled':
                return '#EB6402';
            case 'Ongoing':
                return '#43AD28';
            case 'Finished':
                return '#EB0237';
            default:
                return 'black';
        }
    }};
`;