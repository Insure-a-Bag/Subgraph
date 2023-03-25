import {
  // Approval as ApprovalEvent,
  // ApprovalForAll as ApprovalForAllEvent,
  // OwnershipTransferred as OwnershipTransferredEvent,
  // Paused as PausedEvent,
  PolicyCanceled as PolicyCanceledEvent,
  PolicyCreated as PolicyCreatedEvent,
  PolicyRenewed as PolicyRenewedEvent,
  // Transfer as TransferEvent,
  // Unpaused as UnpausedEvent
} from "../generated/InsureABag/InsureABag"
import {
  // Approval,
  // ApprovalForAll,
  // OwnershipTransferred,
  // Paused,
  PolicyCanceled,
  PolicyCreated,
  PolicyRenewed,
  // Transfer,
  // Unpaused
} from "../generated/schema"

// export function handleApproval(event: ApprovalEvent): void {
//   let entity = new Approval(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.owner = event.params.owner
//   entity.approved = event.params.approved
//   entity.tokenId = event.params.tokenId

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleApprovalForAll(event: ApprovalForAllEvent): void {
//   let entity = new ApprovalForAll(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.owner = event.params.owner
//   entity.operator = event.params.operator
//   entity.approved = event.params.approved

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleOwnershipTransferred(
//   event: OwnershipTransferredEvent
// ): void {
//   let entity = new OwnershipTransferred(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.previousOwner = event.params.previousOwner
//   entity.newOwner = event.params.newOwner

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handlePaused(event: PausedEvent): void {
//   let entity = new Paused(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.account = event.params.account

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handlePolicyCanceled(event: PolicyCanceledEvent): void {
  let entity = new PolicyCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.policyId = event.params.policyId
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePolicyCreated(event: PolicyCreatedEvent): void {
  let entity = new PolicyCreated(
    event.transaction.hash
  )
  entity.policyId = event.params.policyId
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.expiryTime = event.params.expiryTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePolicyRenewed(event: PolicyRenewedEvent): void {
  let entity = new PolicyRenewed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.policyId = event.params.policyId
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.expiryTime = event.params.expiryTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// export function handleTransfer(event: TransferEvent): void {
//   let entity = new Transfer(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.from = event.params.from
//   entity.to = event.params.to
//   entity.tokenId = event.params.tokenId

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleUnpaused(event: UnpausedEvent): void {
//   let entity = new Unpaused(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.account = event.params.account

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }
