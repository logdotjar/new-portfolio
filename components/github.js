import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = () => {

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 4; // 노출할 달 수

        return contributions.filter(day => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();


            if (currentMonth >= shownMonths)
            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
            return (
                date.getFullYear() === currentYear && monthOfDay <= currentMonth || date.getFullYear() === currentYear - 1 &&
                monthOfDay > currentMonth + 11 - shownMonths
            )

        });
    };


    return (
        <GitHubCalendar
            // 깃허브 계정
            username="logdotjar"

            labels={{
                totalCount: ' ',
                weekdays: [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ],
            }}

            theme={{
                level0: '#F0F0F0',
                level1: '#C4EDDE',
                level2: '#7AC7C4',
                level3: '#F73859',
                level4: '#384259'
            }}
            // hideColorLegend
            transformData={selectLastHalfYear}
            transformTotalCount={false}
            blockSize={13}
            style={{
                width: "100%",
                height: "auto",
                margin:"0 auto 2rem"
            }}
        />
    )
}

export default GithubCalendar