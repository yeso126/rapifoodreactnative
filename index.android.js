
var React = require('react-native');
var {AppRegistry, StyleSheet, Text, View, Navigator} = React;
import Categorias from './components/categorias.js'

var rapifoodreactnative = React.createClass({
  render: function() {
    return (


    <Navigator initialRoute={{
          name: 'My First Scene',
          index: 0
            }}
            renderScene={(route,navigator) => 
              <Categorias name={route.name} onForward={() => {
                  var nextIndex = route.index + 1;
                    navigator.push({
                      name: 'Scene ' + nextIndex,
                      index: nextIndex
                    });
                  }}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}/>}/>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    lineHeight: 10,
    padding: 20,
    backgroundColor: '#da3b1f',
    width: 10000,
    color: '#ebeeff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('rapifoodreactnative', () => rapifoodreactnative);
