model = new KerasJS.Model({
  filepaths: {
    model: './cnn.json',
    weights: './cnn_weights.buf',
    metadata: './cnn_metadata.json',
  },
  gpu: false,
  transferLayerOutputs: true
});
