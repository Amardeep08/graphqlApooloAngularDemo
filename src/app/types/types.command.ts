import { Platform } from "./types.platform";

export interface Command{
  /// <summary>
        /// Represents the unique ID for the command.
        /// </summary>
        
         Id :Number;

        /// <summary>
        /// Represents the how-to for the command.
        /// </summary>
        // [Required]
          HowTo :string;

        /// <summary>
        /// Represents the command line.
        /// </summary>
        // [Required]
      CommandLine : string;

        /// <summary>
        /// Represents the unique ID of the platform which the command belongs.
        /// </summary>
        // [Required]
          PlatformId : number;

        /// <summary>
        /// This is the platform to which the command belongs.
        /// </summary>
         Platform : Platform;
} 