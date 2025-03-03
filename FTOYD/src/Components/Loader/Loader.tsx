import styled from "styled-components";

const Loader = () => {

    return (
        <Container>
            <span></span>
        </Container>
    )
}

export default Loader;

const Container = styled.div`
    width: 60px;
    height: 60px;
    margin: 40px auto 0 auto;

    span {
        display: block;
        width: 60px;
        height: 60px;
        border: 3px solid transparent;
        border-radius: 50%;
        border-right-color: rgba(255, 255, 255, 0.7);
        animation: spinner-anim 0.8s linear infinite;
    }

    @keyframes spinner-anim {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
`