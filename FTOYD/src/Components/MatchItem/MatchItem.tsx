import {IMatch} from "../../types/Match.ts";
import styled from "styled-components";
import teamIcon from '../../../public/teamIcon.svg';
import Status from "../Status/Status.tsx";

interface IProps {
    match: IMatch;
}

const MatchItem = ({match} : IProps) => {
    return (
        <Container>
            <Command>
                <CommandIcon src={teamIcon}/>
                <CommandName>{match.awayTeam.name}</CommandName>
            </Command>
            <Status homeTeamScore={match.homeScore} awayTeamScore={match.awayScore} status={match.status} />
            <Command>
                <CommandName>{match.homeTeam.name}</CommandName>
                <CommandIcon src={teamIcon}/>
            </Command>
        </Container>
    )
}

export default MatchItem;

const Container = styled.div`
    padding: 36px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0B0E12;
`

const Command = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`

const CommandIcon = styled.img`
    width: 48px;
    height: 48px;
`

const CommandName = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
`