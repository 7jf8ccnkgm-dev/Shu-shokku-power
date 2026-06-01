let radarChart = null;
function diagnose(){

    let score = 0;

    score += Number(
        document.getElementById("gakureki").value
    );

    score += Number(
        document.getElementById("leader").value
    );

    score += Number(
        document.getElementById("toeic").value
    ) / 40;

    score += Number(
        document.getElementById("gakuchika").value
    ) * 5;

    const power =
        Math.floor(score * 1000);

    let rank;

    const gakureki =
    Number(
        document.getElementById("gakureki").value
    ) * 4;

    const english =
    Number(
        document.getElementById("toeic").value
    ) / 10;

    const leadership =
    Number(
        document.getElementById("leader").value
    ) * 5;

    const action =
    Number(
        document.getElementById("gakuchika").value
    ) * 10;

    const specialty =
    Math.floor(
        Math.random() * 100
    );

    if(power < 30000){
        rank = "C";
    }
    else if(power < 60000){
        rank = "B";
    }
    else if(power < 90000){
        rank = "A";
    }
    else{
        rank = "SS";
    }

    let title;

    if(power < 30000){
        title = "就活村の村人";
    }
    else if(power < 60000){
        title = "ES戦士";
    }
    else if(power < 90000){
        title = "ガクチカの狂戦士";
    }
    else{
        title = "就活神";
    }

    const comments = [
        "面接官が警戒しています...",
        "人事があなたを監視しています。",
        "インターン会場でオーラを放っています。",
        "OB訪問のしすぎで社員証を持っていそうです。",
        "説明会より説明する側に向いています。"
    ];

    const comment =
        comments[
            Math.floor(
                Math.random() * comments.length
            )
        ];

    const company =
    document.getElementById("company").value;

    let companyName;
    let winRate;

    if(company === "google"){

    companyName = "Google";

    winRate =
        Math.min(
            99,
            Math.floor(power / 1500)
        );
    }

    else if(company === "nintendo"){

        companyName = "任天堂";

        winRate =
            Math.min(
            99,
            Math.floor(power / 1800)
            );
    }

    else if(company === "recruit"){

        companyName = "リクルート";

        winRate =
         Math.min(
            99,
            Math.floor(power / 1200)
            );
    }

    else if(company === "mercari"){

        companyName = "メルカリ";

        winRate =
            Math.min(
            99,
            Math.floor(power / 1400)
            );
    }

    else if(company === "toyota"){

        companyName = "トヨタ";

        winRate =
        Math.min(
            99,
            Math.floor(power / 1600)
        );
    }
    else if(company === "cyber"){

    companyName = "サイバーエージェント";

    winRate =
        Math.min(
            99,
            Math.floor(power / 1300)
        );
    }

    else{

        ompanyName = "不明";

        winRate = 0;
    }


    const ctx =
    document.getElementById("radarChart");

if(radarChart){
    radarChart.destroy();
}

radarChart = new Chart(ctx, {

    type: "radar",

    data: {

        labels: [
            "学歴",
            "英語力",
            "リーダー",
            "行動力",
            "専門性"
        ],

        datasets: [{

            label: "就活ステータス",

            data: [
                gakureki,
                english,
                leadership,
                action,
                specialty
            ]

        }]
    },

   options: {

    responsive: true,

    maintainAspectRatio: true,

    scales: {

        r: {

            beginAtZero: true,

            min: 0,

            max: 100,

            pointLabels: {
                color: "white"
            },

            ticks: {
                color: "white",
                backdropColor: "transparent"
            },

            grid: {
                color: "#666"
            }
        }
    }
}    
});
    document.getElementById("result").innerHTML = `
        <h2>診断結果</h2>

        <h1>${power}</h1>

        <h2>ランク ${rank}</h2>

        <h3>称号</h3>
        <p>${title}</p>

        <hr>

        <h3>企業攻略率</h3>

        <p>
            ${companyName} 勝率:
            ${winRate}%
        </p>

        <hr>

        <h3>AIコメント</h3>

        <p>${comment}</p>
    `;
}