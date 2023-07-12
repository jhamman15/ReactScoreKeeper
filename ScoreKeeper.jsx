import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
    state = {
        awayTeamName: '',
        homeTeamName: '',
        awayTeamScore: 0,
        homeTeamScore: 0,
        teamNamesPageDisplay: 'block',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        infoPageDisplay: 'none',

        index: 0,

        homeRecord: [0, 0, 0],
        awayRecord: [0, 0, 0],
        newDate: '',
        gameRecord: [],
    };

    handleSubmitButtonPress = () => {
            if(this.state.homeTeamScore > this.state.awayTeamScore) {
                this.setState({
                    homeRecord: [this.state.homeRecord[0] + 1, 
                                this.state.homeRecord[1],
                                this.state.homeRecord[2]],
                    awayRecord: [this.state.awayRecord[0], 
                                this.state.awayRecord[1],
                                this.state.awayRecord[2] + 1],
                    awayTeamScore: 0,
                    homeTeamScore: 0,
                    newDate: '',
                })
            }
            else if(this.state.homeTeamScore < this.state.awayTeamScore){
                this.setState({
                    homeRecord: [this.state.homeRecord[0], 
                                this.state.homeRecord[1],
                                this.state.homeRecord[2]  + 1],
                    awayRecord: [this.state.awayRecord[0] + 1, 
                                this.state.awayRecord[1],
                                this.state.awayRecord[2]],
                    awayTeamScore: 0,
                    homeTeamScore: 0,
                    newDate: '',
                })
            }
            else if(this.state.homeTeamScore == this.state.awayTeamScore){
                this.setState({
                    homeRecord: [this.state.homeRecord[0], 
                                this.state.homeRecord[1]  + 1,
                                this.state.homeRecord[2]],
                    awayRecord: [this.state.awayRecord[0], 
                                this.state.awayRecord[1] + 1,
                                this.state.awayRecord[2]],
                    awayTeamScore: 0,
                    homeTeamScore: 0,
                    newDate: '',
                })
            }
            
        this.state.gameRecord.splice(this.state.gameRecord.length, 0, {
            date: this.state.newDate,
            homeTeamFinalScore: this.state.homeTeamScore,
            awayTeamFinalScore: this.state.awayTeamScore,
        })
    }

    handleNamesButtonPress = () => this.setState(state => ({
        teamNamesPageDisplay: 'block',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        infoPageDisplay: 'none',
    }));

    handleScoresButtonPress = () => this.setState(state => ({
        teamNamesPageDisplay: 'none',
        scoringPageDisplay: 'block',
        standingsPageDisplay: 'none',
        infoPageDisplay: 'none',
    }));

    handleStandingsButtonPress = () => this.setState(state => ({
        teamNamesPageDisplay: 'none',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'block',
        infoPageDisplay: 'none',
    }));
    
    handleInfoButtonPress = () => this.setState(state => ({
        teamNamesPageDisplay: 'none',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        infoPageDisplay: 'block',
    }));

    addHomeScore = () => {
        this.setState({ 
            homeTeamScore: this.state.homeTeamScore + 1
        })  
    }
    removeHomeScore = () => {
        this.setState({ 
            homeTeamScore: this.state.homeTeamScore - 1
        })  
    }
    addAwayScore = () => {
        this.setState({ 
            awayTeamScore: this.state.awayTeamScore + 1
        })  
    }
    removeAwayScore = () => {
        this.setState({ 
            awayTeamScore: this.state.awayTeamScore - 1
        })  
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{display: this.state.teamNamesPageDisplay}}>
                    <View style={styles.mainContainer}>
                    
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://codehs.com/uploads/bdda7ece56b37112a7d871fe6591e27a' }}
                        >
                        <View style={styles.titleContainer}>
                        
                            <Text style={styles.titleText}>
                                Soccer Scorekeeper
                            </Text>
                        </View>
                        
                            <View style={styles.scoresContainer}>
                            
                            <View style={styles.homeTeamScoreContainer}>
        
                                <View style={styles.teamNamesContainer}>
                                    <Text style={styles.teamNamesText}>
                                        {this.state.homeTeamName}
                                    </Text>
                                </View>
                                
                                <View style={styles.teamScoresContainer}>
                                    <Text style={styles.scoreText}>
                                        {this.state.homeTeamScore}
                                    </Text>
                                </View>
                            </View>
                        
                            <View style={styles.homeButtonsContainer}>
          
                                <TouchableHighlight
                                    onPress={this.addHomeScore}
                                >
                                    <View style={styles.addButton}>
                                    
                                        <Text style={styles.homeAddGoalLabel}>
                                            {this.state.homeTeamName + ' Goal!'}
                                        </Text>
            
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight
                                        onPress={this.removeHomeScore}
                                    >
                                        <View style={styles.minusButton}>
                                            <Text style={styles.homeMinusLabel}>
                                                Remove Goal
                                            </Text>
                                        </View>
                                </TouchableHighlight>
                                
                            </View>
        
                            <View style={styles.awayTeamScoreContainer}>
                                

                                <Text style={styles.teamNamesText}>
                                {this.state.awayTeamName}
                                </Text>
                                
                                <Text style={styles.scoreText}>
                                    {this.state.awayTeamScore}
                                </Text>
                            </View>
                        
                            <View style={styles.awayButtonsContainer}>
                                <TouchableHighlight
                                    onPress={this.addAwayScore}
                                >
                                    <View style={styles.addButton}>
                                
                                        <Text style={styles.awayAddGoalLabel}>
                                            {this.state.awayTeamName + ' Goal!'}
                                        </Text>
            
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight
                                        onPress={this.removeAwayScore}
                                    >
                                        <View style={styles.minusButton}>
                                            <Text style={styles.awayMinusLabel}>
                                                Remove Goal
                                            </Text>
                
                                        </View>
                                </TouchableHighlight>
                            </View>
                            
                            
                            <View style={styles.dateSubmitContainer}>


                                <View style={styles.dateInputContainer}>
                                
                                    <TextInput
                                        value={this.state.newDate}
                                        onChangeText={(newDate) => this.setState({newDate})}
                                        style={{ width: 100, height: 44, padding: 8, fontSize: 16, color: 'white'}}
                                        placeholder="Enter Date"
                                    />
                                </View>
                                
                                <TouchableHighlight
                                    onPress={this.handleSubmitButtonPress}
                                >
                                    <View style={styles.addButton}>
                                    Submit
                                    </View>
                                </TouchableHighlight>
                                
                                
                            </View>
                    </View>

                    </ImageBackground>
                 </View>
                </View>
                <View style={{display: this.state.standingsPageDisplay}}>
                    <View style={styles.mainContainer}>
                    <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://codehs.com/uploads/bdda7ece56b37112a7d871fe6591e27a' }}
                        >
                        
                            <View style={styles.standingsMainContainer}>

                                <View style={styles.titleEditPageContainer}>
                                    <Text style={styles.titleText}>
                                        Soccer Scorekeeper
                                    </Text>
                                </View>
                            
                                <View style={styles.standingsContainer}>
                                
                                    <Text style={styles.standingsText}>
                                    Standings:
                                    </Text>
                                        <Text style={styles.standingsText}>
                                            {this.state.homeTeamName + "     " + this.state.homeRecord[0] + " - " + this.state.homeRecord[1] + " - " + this.state.homeRecord[2]}
                                        </Text>
                                        
                                        <Text style={styles.standingsText}>
                                            {this.state.awayTeamName + "     " + this.state.awayRecord[0] + " - " + this.state.awayRecord[1] + " - " + this.state.awayRecord[2]}
                                        </Text>
                                </View>
                                
                                
                                <View style={styles.gameDatesContainer}>
                                
                                    <View style={styles.headingDatesContainer}>
                                        
                                        <Text style={styles.datesText}>
                                            Date
                                        </Text>
                                        
                                        <Text style={styles.datesText}>
                                            {this.state.homeTeamName}
                                        </Text>
                                        
                                        <Text style={styles.datesText}>
                                            {this.state.awayTeamName}
                                        </Text>
                                    </View>
                                    
                                    <ScrollView>    
                                        {this.state.gameRecord.map((record) => (
                                            <View style={styles.gameRecordContainer}>
                                            
                                                <View style={styles.recordContainer}>
                                                <Text style={styles.recordText}>
                                                    {record.date}
                                                </Text>
                                                </View>
                                                
                                                
                                                <View style={styles.recordContainer}>
                                                <Text style={styles.recordText}>
                                                    {record.homeTeamFinalScore}
                                                </Text>
                                                </View>
                                                
                                                
                                                <View style={styles.recordContainer}>
                                                <Text style={styles.recordText}>
                                                    {record.awayTeamFinalScore}
                                                </Text>
                                                </View>
        
                                            </View>
                                        ))};
                                    </ScrollView>    
                                </View>
                                
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{display: this.state.scoringPageDisplay}}>
                    <View style={styles.mainContainer}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://codehs.com/uploads/bdda7ece56b37112a7d871fe6591e27a' }}
                        >
                            <View style={styles.editTeamNamesContainer}>
                            
                                <View style={styles.titleEditPageContainer}>
                                    <Text style={styles.titleText}>
                                        Soccer Scorekeeper
                                    </Text>
                                </View>
                            
                                <View style={styles.homeTeamScoreContainer}>
            
                                    <TextInput
                                        value={this.state.homeTeamName}
                                        onChangeText={(homeTeamName) => this.setState({homeTeamName})}
                                        style={{ width: 190, height: 44, padding: 3, fontSize: 24, color: 'white' }}
                                        placeholder="Enter Team Name"
                                        fontSize
                                    />
                                    
                                </View>
                                
                                <View style={styles.awayTeamScoreContainer}>
                                    
                                    <TextInput
                                        value={this.state.awayTeamName}
                                        onChangeText={(awayTeamName) => this.setState({awayTeamName})}
                                        style={{ width: 190, height: 44, padding: 3, fontSize: 24, color: 'white' }}
                                        placeholder="Enter Team Name"
                                    />

                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{display: this.state.infoPageDisplay}}>
                    <View style={styles.mainContainer}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://codehs.com/uploads/bdda7ece56b37112a7d871fe6591e27a' }}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>
                                    Soccer Scorekeeper
                                </Text>
                            </View>
                            <View style={styles.scoresContainer}>
                            
                                <ScrollView>    
                                    <View style={styles.introContainer}>
                                        
                                        <View style={styles.imgContainer}>
                                            <Image
                                                source={{ uri: 'https://codehs.com/uploads/257bc98fab306591440fdd29c061751b' }}
                                                style={{ height: 175, width: 125 }}
                                            />
                                        </View>
                                        
                                        <View style={styles.textContainer}>
                                            <Text style={styles.infoText}>
                                                "One of the first documented times of people playing "soccer" is in China during the second and third century BC. During the Han Dynasty, 
                                                it is documented that people would dribble a leather ball and kick it into a small net. 
                                                Although, it wasn't until later that the sport became popular in Europe, especially in England." - https://historyofsoccer.info/
                                            </Text>
                                        </View>
                                            
                                    </View>
                                </ScrollView>
                            </View>
                        </ImageBackground>
                    </View>    
                </View>
                <View style={styles.navbarContainer}>
                    <TouchableHighlight
                        onPress={this.handleNamesButtonPress}
                    >
                        <View style={styles.navButtons}>
                        
                            <Text style={styles.navbarText}>
                            Scores
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    
                    <TouchableHighlight
                        onPress={this.handleStandingsButtonPress}
                    >
                        <View style={styles.navButtons}>
                        
                            <Text style={styles.navbarText}>
                                Standings
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={this.handleScoresButtonPress}
                    >
                        <View style={styles.navButtons}>
                        
                            <Text style={styles.navbarText}>
                            Teams
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={this.handleInfoButtonPress}
                    >
                        <View style={styles.navButtons}>
                        
                            <Text style={styles.navbarText}>
                                Info
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        height: 5.25*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
    },
    navbarContainer: {
        height: .75*(deviceHeight/6),
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2FA13B',
    },
    background: {
        height: 5.25*(deviceHeight/6),
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        width: deviceWidth,
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        margin: 20,
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 38,
        color: 'white',
    },
    scoresContainer: {
        flex: 3,
        width: deviceWidth,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    homeTeamScoreContainer: {
        height: deviceHeight/8,
        width: deviceWidth-20,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    homeButtonsContainer: {
        flexDirection: 'row',
    },
    addButton: {
        height: deviceHeight/15,
        width: deviceWidth/3,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    minusButton: {
        height: deviceHeight/15,
        width: deviceWidth/3,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    scoreText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'right',
    },
    awayTeamScoreContainer: {
        height: deviceHeight/8,
        width: deviceWidth-20,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    awayButtonsContainer: {
        flexDirection: 'row',
    },
    navButtons: {
        height: deviceHeight/16,
        width: deviceWidth/4.25,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    teamNamesText: {
        color: 'white',
        fontSize: 24    
    },
    teamScoresContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    editTeamNamesContainer: {
        height: 5.25*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'space-around',    
    },
    titleEditPageContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        width: deviceWidth,
    },
    standingsContainer: {
        height: deviceHeight/5,
        width: deviceWidth,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    standingsMainContainer: {
        height: 5.25*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'space-around',    
    },
    standingsText: {
        color: 'white',
        fontSize: 24,  
    },
    gameDatesContainer: {
        height: 2*(deviceHeight/5),
        width: deviceWidth,
        borderColor: 'white',
        borderWidth: 1,
    },
    headingDatesContainer: {
        
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    datesText: {
        color: 'white',
        fontSize: 20,    
    },
    dateSubmitContainer: {
        height: deviceHeight/12,
        width: deviceWidth,
        //backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    dateInputContainer: {
        height: deviceHeight/15,
        width: deviceWidth/3,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
    },
    gameRecordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',    
    },
    recordText: {
        color: 'white',
        fontSize: 18,    
    },
    recordContainer: {
        width: deviceWidth/3,
        textAlign: 'center',
        padding: 5,
    },
    introContainer: {
        height: deviceHeight,
        width: deviceWidth/1.1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    infoText: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
});
