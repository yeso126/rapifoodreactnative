
var React = require('react-native');
var { StyleSheet, Text, View, Navigator} = React;

var categorias = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>
            Bienvenido a Rapifood!
          </Text>
          <Text style={styles.subtitle}>
            Pide de una y no esperes
          </Text>
        </View>
        <View>
        
        </View>

      </View>
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
  header:{
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
  subtitle: {
    fontSize: 20,


  },
});

module.exports = categorias;
