# Architecture

## Desktop Shell

The current shell is a minimal Electron application under [app/](./app). It opens a single window and renders a static chat-oriented surface with minimal chrome.

## Local Runtime / Orchestration Layer

The [runtime/](./runtime) tree reserves space for bootstrap, preflight checks, config/workspace handling, gateway behavior, and provider/model adapters. In this skeleton, those areas are descriptive placeholders rather than implementations.

## Model / Provider Seam

Model access is expected to sit behind a narrow provider seam so the desktop shell does not depend directly on any one runtime or model strategy. That seam should eventually support remote providers, local providers, and mixed runtime strategies.

## Future OpenClaw Integration Point

OpenClaw is intentionally not vendored or integrated here yet. The intended attachment point is within the runtime layer, where OpenClaw-specific orchestration can be introduced without collapsing the UI into backend details.

## Startup / Preflight

A real local artifact will need startup checks: runtime availability, workspace readiness, configuration validity, and environment clarity. This skeleton only reserves the concept.

## Workspace / Config Location

The runtime layer is expected to own user-local configuration and workspace concepts rather than burying them inside the UI layer. Exact storage decisions remain open.

## Future Debug / Inspection Surface

An inspectable system should expose a debug surface for runtime state, attachments, execution traces, and preflight status. The app structure includes a place for that surface without implementing it yet.
