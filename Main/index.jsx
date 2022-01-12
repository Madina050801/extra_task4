import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../Context/context.jsx';
import { FilterContext } from '../../Context/Filter.jsx';
import MainContent, { Right } from './style.js';

import { Test } from '../../Context/Test.jsx'
import { Second } from '../../Context/SecondData.jsx';


const Main = () => {

    const [filter, setFilter] = useContext(FilterContext)

    const [state] = useContext(MainContext)

    const [test, SetTest] = useContext(Test)

    const [second, SetSecond] = useContext(Second)

    useEffect(() => {
        console.log(test);
    }, [test])



    return (
        <div>
            <MainContent>
                <MainContent.LeftcBlock>
                    <MainContent.LeftBlockMoreBlock1>
                        <MainContent.LeftBlockImgs1 />
                        <MainContent.Phr>Главная</MainContent.Phr>
                    </MainContent.LeftBlockMoreBlock1>
                    <MainContent.LeftBlockMoreBlock1>
                        <MainContent.LeftBlockImgs2 />
                        <MainContent.Phr>Навигатор</MainContent.Phr>
                    </MainContent.LeftBlockMoreBlock1>
                    <MainContent.LeftBlockMoreBlock1>
                        <MainContent.LeftBlockImgs3 />
                        <MainContent.Phr>Подписки</MainContent.Phr>
                    </MainContent.LeftBlockMoreBlock1>
                    <br />
                    <div style={{ width: '87%', background: '#606060', height: '1px' }}></div>
                    <MainContent.LeftBlockMoreBlock1>
                        <MainContent.LeftBlockImgs4 />
                        <MainContent.Phr>Библиотека</MainContent.Phr>
                    </MainContent.LeftBlockMoreBlock1>
                    <MainContent.LeftBlockMoreBlock1>
                        <MainContent.LeftBlockImgs5 />
                        <MainContent.Phr>История</MainContent.Phr>
                    </MainContent.LeftBlockMoreBlock1>
                    <MainContent.LeftBlockMoreBlock1>
                        <MainContent.LeftBlockImgs6 />
                        <MainContent.Phr>Смотреть позже</MainContent.Phr>
                    </MainContent.LeftBlockMoreBlock1>
                    <MainContent.LeftBlockMoreBlock1>
                        <MainContent.LeftBlockImgs7 />
                        <MainContent.Phr>Понравившиеся</MainContent.Phr>
                    </MainContent.LeftBlockMoreBlock1>
                    <MainContent.LeftBlockMoreBlock1>
                        <MainContent.LeftBlockImgs8 />
                        <MainContent.Phr>Развернуть</MainContent.Phr>
                    </MainContent.LeftBlockMoreBlock1>
                </MainContent.LeftcBlock>



                <Right>
                    <Right.Inset>
                        {state.filter((value) =>
                            (value['category'] === test || test === 'all') & (value['title'].toString().toLowerCase().includes([filter]))
                         
                        ).map((value) => (
                            <div key={value}>
                                <Right.InsetVideoBlocks>
                                    <Right.InsetVideoBlocksBoxTop>
                                        <img src={value.img} alt="" style={{ width: '300px', height: '200px' }} />
                                    </Right.InsetVideoBlocksBoxTop>
                                    <Right.InsetVideoBlocksBoxCenter>
                                        <h2>{value.title}</h2>
                                    </Right.InsetVideoBlocksBoxCenter>
                                    <Right.InsetVideoBlocksBoxBottom>
                                        <h3>{value.category}</h3>
                                    </Right.InsetVideoBlocksBoxBottom>
                                </Right.InsetVideoBlocks>
                            </div>
                        ))}
                    </Right.Inset>
                </Right>

            </MainContent>
        </div>
    )
}
export default Main;