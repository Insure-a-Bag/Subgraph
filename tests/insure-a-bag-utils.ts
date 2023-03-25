import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Paused,
  PolicyCanceled,
  PolicyCreated,
  PolicyRenewed,
  Transfer,
  Unpaused
} from "../generated/InsureABag/InsureABag"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPolicyCanceledEvent(
  policyId: BigInt,
  collectionAddress: Address,
  tokenId: BigInt
): PolicyCanceled {
  let policyCanceledEvent = changetype<PolicyCanceled>(newMockEvent())

  policyCanceledEvent.parameters = new Array()

  policyCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "policyId",
      ethereum.Value.fromUnsignedBigInt(policyId)
    )
  )
  policyCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  policyCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return policyCanceledEvent
}

export function createPolicyCreatedEvent(
  policyId: BigInt,
  collectionAddress: Address,
  tokenId: BigInt,
  expiryTime: BigInt
): PolicyCreated {
  let policyCreatedEvent = changetype<PolicyCreated>(newMockEvent())

  policyCreatedEvent.parameters = new Array()

  policyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "policyId",
      ethereum.Value.fromUnsignedBigInt(policyId)
    )
  )
  policyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  policyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  policyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "expiryTime",
      ethereum.Value.fromUnsignedBigInt(expiryTime)
    )
  )

  return policyCreatedEvent
}

export function createPolicyRenewedEvent(
  policyId: BigInt,
  collectionAddress: Address,
  tokenId: BigInt,
  expiryTime: BigInt
): PolicyRenewed {
  let policyRenewedEvent = changetype<PolicyRenewed>(newMockEvent())

  policyRenewedEvent.parameters = new Array()

  policyRenewedEvent.parameters.push(
    new ethereum.EventParam(
      "policyId",
      ethereum.Value.fromUnsignedBigInt(policyId)
    )
  )
  policyRenewedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  policyRenewedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  policyRenewedEvent.parameters.push(
    new ethereum.EventParam(
      "expiryTime",
      ethereum.Value.fromUnsignedBigInt(expiryTime)
    )
  )

  return policyRenewedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
