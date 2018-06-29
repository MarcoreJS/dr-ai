let brain = tf.sequential();
let learning_rate = 0.5;
const hidden1 = tf.layers.dense({
    inputShape: [33],
    units: 16,
    activation: 'elu',
    useBias: true
});
brain.add(hidden1);

const hidden2 = tf.layers.dense({
    units: 8,
    activation: 'elu',
    useBias: true
});
brain.add(hidden2);

const output = tf.layers.dense({
    units: 5,
    activation: 'elu',
    useBias: true
});

const sgdOpt = tf.train.sgd(learning_rate);
brain.compile({
    optimizer: sgdOpt,
    loss: 'meanSquaredError',
    metrics: ['binaryAccuracy']
});
