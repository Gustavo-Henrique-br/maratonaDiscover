import styled from 'styled-components';

export const Container = styled.main`
    width: min(90vw, 800px);
    margin: auto;
`;

export const Link = styled.button`
    color: var(--orange);
    text-decoration: none;
    cursor: pointer;
    background: none;
    &:hover {
        color:#ec5e41;
    }
`;

export const NewTransaction = styled(Link)`
    margin-bottom: .8rem;
`;

export const Icon = styled.button`
    position: fixed;
    top: 15px;
    right: 15px;
    font-size: 24px;
    background: none;
    cursor: pointer;
    color: var(--switch);
`;
export const Header = styled.header`
    background: linear-gradient(to right, #FFA62E, var(--orange));
    padding: 2rem 0 10rem;
    text-align: center;
`;

export const Logo = styled.h1`
    background: linear-gradient(90deg, #5650de, #f869d5);
    background-clip: text;
    letter-spacing: -0.2rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    font-weight: 700;
`;

export const Balance = styled.section`
    margin-top: -8rem;
    animation: dashIn .4s ease-in-out;
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
`;
export const H2 = styled.h2`
    color: var(--dark-purple);
    font-weight: 600;
    margin-top: 0;
`;

export const Transiction = styled.section`
    width: 100%;
    overflow-x: auto;
    animation: dashIn .4s ease-in-out;
`;
export const DataTable = styled.table`
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #969cb3;
`;
export const Th = styled.th`
    background: var(--primary);
    color: var(--dark-purple);
    font-weight: normal;
    padding: 1rem 2rem;
    text-align: left;
    &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
    }
    &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
    }
`;
export const Footer = styled.footer`
    text-align: center;
    padding: 4rem 0 2rem;
    color: var(--dark-purple);
    opacity: 0.6;
`;

export const Toast = styled.div`
    /* position: fixed;
    bottom: 0;
    left: 24px;
    right: 24px;
    display: flex;
    flex-direction: column;
    height: 120px;
    background-color: red; */
`;