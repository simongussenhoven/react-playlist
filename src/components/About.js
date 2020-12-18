function About () {
    return (
        <div className="about">
            <h1 className="about__h1">This is something about me</h1>
            <p className="about__p">Hello, my name is Simon. I work as a customer service consultant for a TV-provider. This means maintaining the knowledgebases, improving customer service applications and streamlining business processes. Currently I'm studying front-end development @Winc Academy, this page is one of the projects.</p>
            <p className="about__h1">About this project: it was made in using HTML, CSS and ReactJS. What goals were achieved in this project?</p>
            <ul class="about__list">
                <li className="about__yes">Deleting items (+1)</li>
                <li className="about__yes">Filtering items on genre and rating (+2)</li>
                <li className="about__yes">Routing (+2)</li>
            </ul>
        </div>
    )
}

export default About