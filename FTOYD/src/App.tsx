import styled from "styled-components";
import {useEffect, useState} from "react";
import {IMatch} from "./types/Match";
import axios from "axios";
import errorImage from '../public/alert-triangle.svg';
import refreshImage from '../public/Refresh.svg';
import MatchItem from "./Components/MatchItem/MatchItem.tsx";
import Loader from "./Components/Loader/Loader.tsx";

const API_URL = "https://app.ftoyd.com/fronttemp-service/fronttemp";

function App() {
    const [data, setData] = useState<IMatch[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getAllMatches = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setData(response.data.data.matches);
        } catch (error) {
            setError("Ошибка при загрузке данных");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllMatches();
    }, []);


  return (
    <Container>
       <Header>
           <Logo>Match Tracker</Logo>
           <HeaderRight>
               {error && (
                   <Error>
                       <ErrorImg src={errorImage} />
                       <ErrorText>Ошибка: не удалось загрузить информацию</ErrorText>
                   </Error>
               )}
                <Button disabled={loading} onClick={getAllMatches}>
                    Обновить
                    <RefreshImage src={refreshImage} />
                </Button>
           </HeaderRight>
       </Header>
        {loading ? (
            <Loader />
        ) : (
            <List>
                {data ? data.map(i => (
                    <MatchItem match={i} />
                )) : (
                    ''
                )}
            </List>
        )}
    </Container>
  )
}

export default App;

const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    padding: 42px;
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

const Logo = styled.h1`
    font-size: 32px;
    font-weight: 800;
    color: #fff;
`

const Error = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 24px;
    background: #0F1318;
`

const ErrorImg = styled.img`
    width: 28px;
    height: 28px;
`

const ErrorText = styled.p`
    font-size: 18px;
    color: #fff;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 40px;
    background: #EB0237;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: #A01131;
    }

    &:disabled {
        background: #701328;
        color: #787878;
        cursor: not-allowed;

        & img {
            opacity: 0.5;
        }
    }
`

const RefreshImage = styled.img`
    width: 26px;
    height: 26px;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
