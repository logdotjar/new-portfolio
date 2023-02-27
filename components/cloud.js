import React from "react";
import WordCloud from "react-d3-cloud";
import { select } from "d3-selection";


let data = [
    {
        "text": "HTML5",
        "value": 492
    },
    {
        "text": "CSS3",
        "value": 132
    },
    {
        "text": "Javascript",
        "value": 797
    },
    {
        "text": "React.js",
        "value": 788
    },
    {
        "text": "Next.js",
        "value": 722
    },
    {
        "text": "Node.js",
        "value": 254
    },
    {
        "text": "Express",
        "value": 682
    },
    {
        "text": "AWS",
        "value": 345
    },
    {
        "text": "Jira",
        "value": 297
    },
    {
        "text": "Vercel",
        "value": 650
    },
    {
        "text": "git",
        "value": 519
    },
    {
        "text": "github",
        "value": 938
    },
    {
        "text": "Jetbrains",
        "value": 757
    },
    {
        "text": "figma ",
        "value": 608
    },
    {
        "text": "HTML5",
        "value": 492
    },
    {
        "text": "CSS3",
        "value": 132
    },
    {
        "text": "Javascript",
        "value": 797
    },
    {
        "text": "React.js",
        "value": 788
    },
    {
        "text": "Next.js",
        "value": 722
    },
    {
        "text": "Node.js",
        "value": 254
    },
    {
        "text": "Express",
        "value": 682
    },
    {
        "text": "AWS",
        "value": 345
    },
    {
        "text": "Jira",
        "value": 297
    },
    {
        "text": "Vercel",
        "value": 650
    },
    {
        "text": "git",
        "value": 519
    },
    {
        "text": "github",
        "value": 938
    },
    {
        "text": "Jetbrains",
        "value": 757
    },
    {
        "text": "figma ",
        "value": 608
    }
]
const fontSizeMapper = word => word.value / 20;
const rotate = word => (word.value % 90) - 45;

const onWordMouseOver = word => {

    select("svg")
        .append("text")
        .text(function() {
            return [word.x, word.y]; // 텍스트 value
        })
        .attr("x", () => 100)
        .attr("y", () => 200)
        .attr("id", "t" + word.x + "-" + word.y);
};

const onWordMouseOut = word => {
    // id, 위치값 제거
    select("#t" + word.x + "-" + word.y).remove();
};

const Cloud = () => {
    const newData = data.map(item => ({
        text: item.text,
        value: Math.random() * 1000
    }));

    return (
        <WordCloud
            width={550}
            height={440}
            data={newData}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            padding={2}
            onWordMouseOver={onWordMouseOver}
            onWordMouseOut={onWordMouseOut}
        />
    );
}

export default Cloud;