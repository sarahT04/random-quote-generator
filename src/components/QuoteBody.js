import React, { Component, createRef } from "react";
import { getRandomColour, shadeColor } from "../utils/utils";
import NewQuote from "./NewQuote";
import QuoteAuthor from "./QuoteAuthor";
import QuoteText from "./QuoteText";
import ShareQuote from "./ShareQuote";
import axios from "axios";

class QuoteBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            color: "",
            infinity: false,
            interval: null,
        }

        this.onNewQuoteClick = this.onNewQuoteClick.bind(this);
        this.onCreateNewQuoteClick = this.onCreateNewQuoteClick.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.getNewQuotes = this.getNewQuotes.bind(this);
        this.onInfinityClick = this.onInfinityClick.bind(this);
    }

    componentDidMount() {
        this.getNewQuotes();
    }

    componentWillUnmount() {
        clearInterval(this.getNewQuotes);
    }

    componentDidUpdate() {
        const colorChange = 20;
        const { color } = this.state

        document.body.style.background = `linear-gradient(45deg, ${shadeColor(color, colorChange)}, ${color}, ${shadeColor(color, -colorChange)}`;
        document.getElementById('quote-box').style.color = color;
        document.getElementById('wrapper').style.backgroundColor = color;
        document.querySelector('.button').style.backgroundColor = color;
        document.querySelectorAll("button").forEach(button => {
            button.style.backgroundColor = color;
        })
    }

    getNewQuotes() {
        axios.get("https://type.fit/api/quotes")
            .then((response) => {
                const quotes = response.data
                const indexNum = Math.floor(Math.random() * quotes.length)
                let { text, author } = quotes[indexNum];
                author = author ?? "Anonymous";
                const color = getRandomColour();
                this.setState({
                    quote: text,
                    author: author,
                    color: color,
                })
            })
    }

    onNewQuoteClick() {
        this.getNewQuotes();
        [...document.getElementsByTagName('span')].forEach(span => {
            span.contentEditable = false;
        })
    }

    onCreateNewQuoteClick() {
        [...document.getElementsByTagName('span')].forEach(span => {
            span.contentEditable = true;
        })
        this.setState({
            author: "Write something here..",
            quote: "Write something here..",
            color: "#000000",
        })
    }

    onColorChange(event) {
        this.setState({
            color: event.target.value
        })
    }

    onInfinityClick() {
        if (this.state.interval === null) {
            this.setState({
                infinity: true,
                interval: setInterval(this.getNewQuotes, 5000)
            });
        } else {
            clearInterval(this.state.interval);
            this.setState({ infinity: false, interval: null });
        }
    }

    render() {
        const getQuote = `"${this.state.quote}" - ${this.state.author}`;
        const ref = createRef(null);

        return (
            <div id="wrapper" ref={ref}>
                <div id="quote-box">
                    <QuoteText quote={this.state.quote} />
                    <QuoteAuthor author={this.state.author} />
                    <ShareQuote getQuote={getQuote} innerRef={ref} onCreateNewQuoteClick={this.onCreateNewQuoteClick} />
                    <NewQuote onNewQuoteClick={this.onNewQuoteClick} color={this.state.color} onColorChange={this.onColorChange} infinity={this.state.infinity} onInfinityClick={this.onInfinityClick} />
                </div>
            </div>
        )
    }

}

export default QuoteBody;