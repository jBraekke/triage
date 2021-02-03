import React, { useState } from 'react';
import './Main.css';
import Goback from '../images/icons/refresh-outline.svg';
import Siren from '../components/Siren/Siren';

interface Question {
    type: string,
    title: string,
    questions: {
        value: number,
        display: string,
    }[],
    answer: null | number;
}

const initFirstLevel =
    {
        type: 'multiple',
        title: 'Hva ønsker du hjelp til?',
        questions: [
            { value: 1, display: 'Fornye resept' },
            { value: 2, display: 'Legetime' },
            { value: 3, display: 'Spørsmål til legekontor' },
            { value: 4, display: 'Akutt sykdom/skade' },
        ],
        answer: null,
    } as Question;

const initSecondLevel = [
    {
        type: 'multiple',
        title: 'Haster timen?',
        questions: [
            { value: 1, display: 'Ja' },
            { value: 0, display: 'Nei' },
        ],
        answer: null,
    },
    {
        type: 'multiple',
        title: 'Har du hoste eller feber?',
        questions: [
            { value: 1, display: 'Ja' },
            { value: 0, display: 'Nei' },
        ],
        answer: null,
    },
    {
        type: 'multiple',
        title: 'Trenger du en blodprøve?',
        questions: [
            { value: 1, display: 'Ja' },
            { value: 0, display: 'Nei' },
        ],
        answer: null,
    },
    {
        type: 'multiple',
        title: 'Trenger du en fysisk undersøkelse?',
        questions: [
            { value: 1, display: 'Ja' },
            { value: 0, display: 'Nei' },
        ],
        answer: null,
    }
] as unknown as Question[];

const initLegeindeks =
    {
        type: 'multiple',
        title: 'Hva feiler det deg?',
        questions: [
            { value: 1, display: 'Somantisk / generelt vondt i kroppen' },
            { value: 2, display: 'Skader / ulykker / uhell' },
            { value: 3, display: 'Bitt / stikk / mark' },
            { value: 4, display: 'Psykisk / kriser' },
            { value: 4, display: 'Rus / forgiftninger' },
        ],
        answer: null,
    } as Question;

const initLegeindeksSomatisk =
    {
        type: 'multiple',
        title: 'Takk! Hvor gjør det vondt?',
        questions:
            [
                { value: 0, display: 'Allergi' },
                { value: 1, display: 'Blødning – ikke traumatisk' },
                { value: 2, display: 'Brystsmerter / hjertesykdom' },
                { value: 3, display: 'Feber / infeksjon / sepsis' },
                { value: 4, display: 'Funksjonssvikt (forvirring)' },
                { value: 5, display: 'Gynekologi' },
                { value: 6, display: 'Hals' },
                { value: 7, display: 'Hodepine' },
                { value: 8, display: 'Hud/utslett' },
                { value: 9, display: 'Hyperglykemi' },
                { value: 10, display: 'Hypoglykemi' },
                { value: 11, display: 'Koronavirus – Covid-19' },
                { value: 12, display: 'Kramper' },
                { value: 13, display: 'Lammelser' },
                { value: 14, display: 'Ledd / muskelsmerter' },
                { value: 15, display: 'Mage- og tarmplager' },
                { value: 16, display: 'Mannlige kjønnsorgan' },
                { value: 17, display: 'Mulig dødsfall' },
                { value: 18, display: 'Munn og tenner' },
                { value: 19, display: 'Nese' },
                { value: 20, display: 'Oppkast / diare' },
                { value: 21, display: 'Pustevansker' },
                { value: 22, display: 'Rygg / nakke' },
                { value: 23, display: 'Svangerskap / fødsel / barsel / amming' },
                { value: 24, display: 'Svimmelhet' },
                { value: 25, display: 'Sykt barn' },
                { value: 26, display: 'Synkope' },
                { value: 27, display: 'Urinveier' },
                { value: 28, display: 'Øre' },
                { value: 29, display: 'Øye' },
            ],
        answer: null,
    } as Question;

const Main = (): JSX.Element => {

    const [firstLevel, setFirstLevel] = useState(initFirstLevel);
    const [secondLevel, setSecondLevel] = useState([...initSecondLevel]);
    const [legeIndeks, setLegeIndeks] = useState(initLegeindeks);
    const [somatiskFeil, setSomatiskFeil] = useState(initLegeindeksSomatisk);

    const handleSecondLevel = (index: number, answer: number) => {
        const alterSecondLevel = [...secondLevel];

        alterSecondLevel[index].answer = answer;
        setSecondLevel(alterSecondLevel);
    }

    const renderNextQuestion = () => {
        if (firstLevel.answer === null) {
            return (<div>
                <h3>{firstLevel.title}</h3>
                <div className="questions">
                    {firstLevel.questions.map((question, index) => {
                        return <div className="question" key={index} onClick={() => setFirstLevel({ ...firstLevel, answer: question.value })}>
                            {question.display}
                        </div>;
                    })}
                </div>
            </div >)
        }

        if (firstLevel.answer === 1) {
            return <div>
                <p>Gratulerer, du får nå muligheten til å fornye resepten din</p>
                <a className="question" href="https://tjenester.helsenorge.no/meldinger/forny-resept">
                    <svg role="img" aria-hidden="true" viewBox="0 0 48 48" width="64" height="64" fill="#126F87"><path fillRule="evenodd" d="M25.551 13.585a1.227 1.227 0 01-1.699.374 1.231 1.231 0 01.664-2.266 1.231 1.231 0 011.035 1.893zm.164-2.542a2.233 2.233 0 00-3.08.68 2.232 2.232 0 001.875 3.43c.161 0 .323-.017.484-.053a2.211 2.211 0 001.4-.976 2.212 2.212 0 00.298-1.681 2.216 2.216 0 00-.977-1.4zm6.525 25.523a1.23 1.23 0 11-.824-2.318 1.23 1.23 0 01.824 2.319zm-1.16-3.259a2.232 2.232 0 00-1.353 2.85 2.233 2.233 0 002.85 1.353 2.234 2.234 0 001.352-2.85 2.233 2.233 0 00-2.849-1.352zm-.446-13.184c.078-.319.276-.588.557-.758a1.22 1.22 0 01.931-.141 1.231 1.231 0 01-.589 2.389 1.226 1.226 0 01-.899-1.49zm.66 2.46a2.234 2.234 0 002.699-1.632 2.233 2.233 0 00-1.63-2.698 2.22 2.22 0 00-1.689.256c-.51.308-.869.797-1.012 1.375a2.218 2.218 0 00.258 1.688c.308.51.796.869 1.374 1.012zm1.57-8.997a1.231 1.231 0 01-2.073-1.325 1.23 1.23 0 012.073 1.325zm.165-2.543a2.234 2.234 0 00-3.08.68 2.233 2.233 0 00.678 3.08 2.232 2.232 0 003.379-2.36 2.22 2.22 0 00-.977-1.4zm3.802 27.208a1.906 1.906 0 01-1.904 1.903H26.55V18.207h-7.038v-7.825c0-1.048.854-1.902 1.904-1.902h13.512c1.05 0 1.904.854 1.904 1.902v27.869zM11.038 24.934h14.21v-5.426h-14.21v5.425zm14.21 15.219h-14.21v-2.685h8.497v-8.067h-8.497v-3.169h14.21v13.92zm-14.21-3.685h7.498v-6.067h-7.498v6.067zm23.89-29.29H21.414a3.208 3.208 0 00-3.204 3.204v7.825H9.738v23.247h25.19a3.208 3.208 0 003.203-3.204V10.383a3.207 3.207 0 00-3.204-3.203zm-2.064 21.397a1.231 1.231 0 01-2.073-1.326 1.23 1.23 0 012.073 1.325zm.165-2.543a2.217 2.217 0 00-1.68-.299 2.233 2.233 0 00-.721 4.058 2.23 2.23 0 002.402-3.759z"></path></svg>
                    <span>Forny resept</span>
                </a>
            </div>
        }

        const nextQuestion = secondLevel.findIndex(x => x.answer === null);

        if (firstLevel.answer === 2 && nextQuestion > -1) {
            return <div>
                <h3>{secondLevel[nextQuestion].title}</h3>
                <div className="questions">
                    {secondLevel[nextQuestion].questions.map((question, index) => {
                        return <div className="question" key={index} onClick={() => handleSecondLevel(nextQuestion, question.value)}>
                            {question.display}
                        </div>;
                    })}
                </div>
            </div>
        }

        if (firstLevel.answer === 2 && nextQuestion === -1 && legeIndeks.answer === null) {
            return <div>
                <h3>{legeIndeks.title}</h3>
                <div className="questions">
                    {legeIndeks.questions.map((question, index) => {
                        return <div className="question" key={index} onClick={() => setLegeIndeks({ ...legeIndeks, answer: question.value })}>
                            {question.display}
                        </div>;
                    })}
                </div>
            </div>
        }

        if (firstLevel.answer === 2 && nextQuestion === -1 && legeIndeks.answer === 1 && somatiskFeil.answer === null) {
            return <div>
                <h3>{somatiskFeil.title}</h3>
                <div className="questions">
                    {somatiskFeil.questions.map((question, index) => {
                        return <div className="question" key={index} onClick={() => setSomatiskFeil({ ...somatiskFeil, answer: question.value })}>
                            {question.display}
                        </div>;
                    })}
                </div>
            </div>
        }

        if (firstLevel.answer === 2 && nextQuestion === -1 && legeIndeks.answer === 1 && somatiskFeil.answer !== null) {
            return <div>
                <h4>Uff, du har skadet deg skikkelig.. Fyll ut litt mer informasjon slik at legen vet hva det gjelder.</h4>
                <div className="form-element">
                    <label>Hvordan gikk dette seg til?</label>
                    <textarea cols={5} rows={5} />
                </div>
                <div className="form-element">
                    <label>Hvilke symptomer har du nå?</label>
                    <textarea cols={5} rows={5} />
                </div>
                <div className="form-element">
                    <label>Har du feber? Eventuelt hvor mange grader?</label>
                    <textarea cols={5} rows={5} />
                </div>
                <p>Huff da, ser at du har det vondt..</p>
                <a className="question" href="https://tjenester.helsenorge.no/meldinger/forny-resept">
                    <svg role="img" aria-hidden="true" viewBox="0 0 48 48" width="64" height="64" fill="#126F87"><path fillRule="evenodd" d="M25.551 13.585a1.227 1.227 0 01-1.699.374 1.231 1.231 0 01.664-2.266 1.231 1.231 0 011.035 1.893zm.164-2.542a2.233 2.233 0 00-3.08.68 2.232 2.232 0 001.875 3.43c.161 0 .323-.017.484-.053a2.211 2.211 0 001.4-.976 2.212 2.212 0 00.298-1.681 2.216 2.216 0 00-.977-1.4zm6.525 25.523a1.23 1.23 0 11-.824-2.318 1.23 1.23 0 01.824 2.319zm-1.16-3.259a2.232 2.232 0 00-1.353 2.85 2.233 2.233 0 002.85 1.353 2.234 2.234 0 001.352-2.85 2.233 2.233 0 00-2.849-1.352zm-.446-13.184c.078-.319.276-.588.557-.758a1.22 1.22 0 01.931-.141 1.231 1.231 0 01-.589 2.389 1.226 1.226 0 01-.899-1.49zm.66 2.46a2.234 2.234 0 002.699-1.632 2.233 2.233 0 00-1.63-2.698 2.22 2.22 0 00-1.689.256c-.51.308-.869.797-1.012 1.375a2.218 2.218 0 00.258 1.688c.308.51.796.869 1.374 1.012zm1.57-8.997a1.231 1.231 0 01-2.073-1.325 1.23 1.23 0 012.073 1.325zm.165-2.543a2.234 2.234 0 00-3.08.68 2.233 2.233 0 00.678 3.08 2.232 2.232 0 003.379-2.36 2.22 2.22 0 00-.977-1.4zm3.802 27.208a1.906 1.906 0 01-1.904 1.903H26.55V18.207h-7.038v-7.825c0-1.048.854-1.902 1.904-1.902h13.512c1.05 0 1.904.854 1.904 1.902v27.869zM11.038 24.934h14.21v-5.426h-14.21v5.425zm14.21 15.219h-14.21v-2.685h8.497v-8.067h-8.497v-3.169h14.21v13.92zm-14.21-3.685h7.498v-6.067h-7.498v6.067zm23.89-29.29H21.414a3.208 3.208 0 00-3.204 3.204v7.825H9.738v23.247h25.19a3.208 3.208 0 003.203-3.204V10.383a3.207 3.207 0 00-3.204-3.203zm-2.064 21.397a1.231 1.231 0 01-2.073-1.326 1.23 1.23 0 012.073 1.325zm.165-2.543a2.217 2.217 0 00-1.68-.299 2.233 2.233 0 00-.721 4.058 2.23 2.23 0 002.402-3.759z"></path></svg>
                    <span>Bestill time</span>
                </a>
            </div>
        }

        if (firstLevel.answer === 4) {
            return <div>
                <h2>Ring 113!!</h2>
                <Siren />
            </div>
        }

        else {
            return <p>Her er det dessverre ingen logikk.</p>
        }
    }

    return (
        <div className="main">
            <h1>Besvar spørsmålene under</h1>

            <div>
                {renderNextQuestion()}
            </div>

            <p className="reset" onClick={() => {
                setFirstLevel(initFirstLevel);
                initSecondLevel.forEach(x => x.answer = null);
                setSecondLevel(initSecondLevel);
                setLegeIndeks(initLegeindeks);
                setSomatiskFeil(initLegeindeksSomatisk)
            }}><span>Start på nytt</span> <img src={Goback} alt="refresh" height={20} /></p>

        </div >
    );
};

export default Main;