/* eslint-disable no-undef */
/* eslint-disable new-cap */
const Run = require('run-sdk')

const run = new Run({
  network: 'main',
  purse: 'KwMAvKrad1UCdETP69YLJ6oEhXP5wMwuUQe8G93XN5Rg24kBG9da',
  // owner: 'L56p7CbdE3273jHPwwqmY5DqvKWQvEEsnycS7PsjdfdAm9J64pZs',
  owner: 'KwYdniBTCSMcMnz6B96SUjMTwZKTt6G15XAp7fBg2kCeNZbMvjSg',
  trust: '*',
  timeout: 60000,
})

class Contract extends Jig {
  init(
    title,
    clientName,
    description,
    reward,
    limit,
    createdAt,
    owner = '19oh2NihqojSw9YGcmAiHEuTrQkBapx17w'
  ) {
    this.metadata = {
      name: title,
    }
    this.clientName = clientName
    this.description = description
    this.limit = limit
    this.satoshis = reward
    this.reward = reward
    this.createdAt = createdAt
    this.owner = owner
    this.adventurer = ''
    this.discussions = []
    this.isFinished = false
    this.isSucceed = false
    this.isFailure = false
  }

  setAdventurer(adventurer) {
    this.adventurer = adventurer
  }

  setDiscussions(name, comment, time) {
    comment = {
      name,
      comment,
      time,
    }
    this.discussions.push(comment)
    return this.discussions
  }

  send(to) {
    this.owner = to
  }

  destroy() {
    this.satoshis = 0
    super.destroy()
  }

  withdraw() {
    this.satoshis = 0
  }

  isFinish() {
    this.isFinished = true
  }

  isSuccess() {
    this.isSucceed = true
  }

  isFail() {
    this.isFailure = true
  }
}

const deploy = async () => {
  const deploy = run.deploy(Contract)
  await deploy.sync()
  console.log(deploy)
}
deploy()

// const comment = async () => {
//   const contract = await run.load(
//     'b9dc31fc919c14ad6efada41aec9f663ea9f0c0644028d7614461b3fb54b856d_o3'
//   )
//   await contract.sync()
//   const result = contract.discussions.setDiscussions(
//     'Gandalf',
//     'TEST',
//     '22/9/2'
//   )
//   await result.sync()
//   console.log({ result })
//   console.log(contract)
// }

// comment()

// location: 'e4b91fc3ab25c8b6247c124b014fb468ca8feec4d57a5f0c43bf30b489e44c12_o1',
// origin: 'e4b91fc3ab25c8b6247c124b014fb468ca8feec4d57a5f0c43bf30b489e44c12_o1',
// nonce: 1,
// owner: '17WzGFg5Rkom9gdCNbewMaN5bkwApUCYyq',
// satoshis: 0

// owner: 'L1x3ZBdLHnmRJrZQ9P9DU4HCkp3jLcPtKJnzaN965k2skDg5PrsT',

// owner: 'KwMAvKrad1UCdETP69YLJ6oEhXP5wMwuUQe8G93XN5Rg24kBG9da',
